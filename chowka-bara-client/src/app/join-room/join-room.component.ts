import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangoliLineComponent } from '../rangoli-line/rangoli-line.component';

@Component({
  selector: 'join-room',
  standalone: true,
  imports: [CommonModule, RangoliLineComponent],
  templateUrl: './join-room.component.html',
  styleUrl: './join-room.component.scss'
})
export class JoinRoomComponent {

}
