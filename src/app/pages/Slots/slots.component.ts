import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlotsFilterViewComponent, SlotsListComponent, SlotsSliderComponent } from './components';
import { SlotsService } from '../../services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [
    SlotsSliderComponent,
    SlotsFilterViewComponent,
    SlotsListComponent,
    HttpClientModule
  ],
  providers: [SlotsService],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {

}
