import {ChangeDetectionStrategy, Component} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ISidebarLink } from '../../interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  sidebarLinks: ISidebarLink[] = [
    {
      linkName: 'Sport',
      iconSrc: 'assets/icons/sport.png',
      routerLink: '/sport'
    },
    {
      linkName: 'Live',
      iconSrc: 'assets/icons/live.png',
      routerLink: '/live'
    },
    {
      linkName: 'Slots',
      iconSrc: 'assets/icons/slot.png',
      routerLink: '/slots'
    },
    {
      linkName: 'Casino',
      iconSrc: 'assets/icons/casino.png',
      routerLink: '/casino'
    }
  ]
}
