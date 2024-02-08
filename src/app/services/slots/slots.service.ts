import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, switchMap, tap, catchError, distinctUntilChanged} from 'rxjs';
import {
  ISlotFilterCategory,
  ISlotFilterCategoriesResponse,
  ISlotFilterProviderWithGamesResponse,
  ISlotFilterProvidersResponse,
  ISlotFilterProvider,
  ISlotGameInfo
} from '../../interfaces';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';


interface FilterOptions {
  category: ISlotFilterCategory;
  provider: string;
}

@Injectable()
export class SlotsService {
  private baseUrl = environment.slotsApiUrl;
  private http: HttpClient = inject(HttpClient);
  filterSignal = signal<FilterOptions>({} as FilterOptions);
  activeGamesSignal =
    signal<ISlotGameInfo[]>([] as ISlotGameInfo[]);

  private slotCategories$ =
    this.http.get<ISlotFilterCategoriesResponse>(`${this.baseUrl}/v2/slot/categories?include=games`)
      .pipe(map((response) => response.data.filter(
            (category) =>
              category.category === 'web:popular' ||
              category.category === 'web:new_games' ||
              category.category === 'web:buy_bonus'
          )
        ), tap(
          categories =>
            this.setFilters({category: categories[0], provider: ''})
        ),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return []
        })
      );

  slotCategoriesSig = toSignal(this.slotCategories$, {
    initialValue: [] as ISlotFilterCategory[],
  })

  private providerList$ = this.http.get<ISlotFilterProvidersResponse>(
    `${this.baseUrl}?type=slot&platform=desktop`
  ).pipe(map((response) => {
      return response.data
    })
  );

  providerList = toSignal(this.providerList$, {
    initialValue: [] as ISlotFilterProvider[],
  });

  private filteredGames$ = toObservable(this.filterSignal).pipe(
    distinctUntilChanged(),
    switchMap((filter) => {
      if(!filter.provider) {
        this.activeGamesSignal.set(filter.category?.games as ISlotGameInfo[])
        return []
      }
      return this.http.get<ISlotFilterProviderWithGamesResponse>(
        `${this.baseUrl}/v2/slot/providers/${filter.provider}`
      ).pipe(
          tap((response) =>
            this.activeGamesSignal.set(response.data.games)),
          catchError((error: HttpErrorResponse) => {
            console.error(error.error);
            return []
          })
        );
    }),
    catchError((error) => {
      console.error(error);
      return []
    })
  )

  filteredGames = toSignal(this.filteredGames$, {
    initialValue: {} as ISlotFilterProviderWithGamesResponse,
  });

  setFilters(options: FilterOptions = {} as FilterOptions) {
    const { category, provider } = options;

    this.filterSignal.set({
      category,
      provider,
    });
  }
}
