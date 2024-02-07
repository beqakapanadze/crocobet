import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import { SlotsService } from '../../../../../../services';
import {ISlotFilterCategory} from "../../../../../../interfaces";

@Component({
  selector: 'app-slots-filter-providers',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './slots-filter-providers.component.html',
  styleUrl: './slots-filter-providers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsFilterProvidersComponent {
  slotsService = inject(SlotsService);
  expanded = false;
  providers = this.slotsService.providerList;

  filterByProvider(provider: string) {
    this.slotsService.setFilters({category: {} as ISlotFilterCategory, provider});
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
