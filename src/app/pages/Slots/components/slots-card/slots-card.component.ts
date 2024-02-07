import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISlotGameInfo } from '../../../../interfaces';
import { NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-slots-card',
  standalone: true,
  imports: [
    NgStyle,
    UpperCasePipe
  ],
  templateUrl: './slots-card.component.html',
  styleUrl: './slots-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsCardComponent {
  @Input() slot: ISlotGameInfo = {} as ISlotGameInfo;
}
