import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SlotsCardComponent } from '../slots-card';
import { SlotsService } from '../../../../services';
import {CommonModule} from "@angular/common";
import {ISlotGameInfo} from "../../../../interfaces";

@Component({
  selector: 'app-slots-list',
  standalone: true,
  imports: [
    SlotsCardComponent,
    CommonModule
  ],
  templateUrl: './slots-list.component.html',
  styleUrl: './slots-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsListComponent {
  slotService = inject(SlotsService);
  slots = this.slotService.activeGamesSignal;
  
  trackGameId(index: number, slot: ISlotGameInfo): string {
    return slot?.gameId;
  }
}
