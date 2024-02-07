import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlotsFilterCategoriesComponent, SlotsFilterProvidersComponent } from './components';


@Component({
  selector: 'app-slots-filter-view',
  standalone: true,
  imports: [SlotsFilterCategoriesComponent, SlotsFilterProvidersComponent],
  templateUrl: './slots-filter-view.component.html',
  styleUrl: './slots-filter-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsFilterViewComponent {

}
