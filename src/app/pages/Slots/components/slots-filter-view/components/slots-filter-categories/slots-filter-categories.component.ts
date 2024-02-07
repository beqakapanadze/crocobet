import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { SlotsService } from '../../../../../../services';
import { ISlotFilterCategory } from '../../../../../../interfaces';
import { AsyncPipe, NgClass } from '@angular/common';

interface CategoryInfo {
  [key: string]: CategoryInfoDetail;
}
interface CategoryInfoDetail {
  iconSrc: string;
  name: string;
}

@Component({
  selector: 'app-slots-filter-categories',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass
  ],
  templateUrl: './slots-filter-categories.component.html',
  styleUrl: './slots-filter-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsFilterCategoriesComponent {
  categoryInfo: CategoryInfo = {
    'web:popular': { iconSrc: 'assets/icons/top-slots.png', name: 'Top Slots' },
    'web:new_games': { iconSrc: 'assets/icons/new-slots.png', name: 'New Games' },
    'web:buy_bonus': { iconSrc: 'assets/icons/buy-bonus.png', name: 'Buy Bonus' },
  }
  slotsService = inject(SlotsService)
  categories = this.slotsService.slotCategoriesSig;

  filterByCategory(category: ISlotFilterCategory) {
    this.slotsService.setFilters({category, provider: ''});
  }
}
