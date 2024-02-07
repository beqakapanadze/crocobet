import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISlider } from '../../../../interfaces';

@Component({
  selector: 'app-slots-slider',
  standalone: true,
  imports: [],
  templateUrl: './slots-slider.component.html',
  styleUrl: './slots-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsSliderComponent {
  sliderContent: ISlider =
    {
      imgSrc: 'assets/images/slider.png',
      promoName: 'Triple Wheel'
    }

}
