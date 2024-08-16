import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangoliLineComponent } from '../rangoli-line/rangoli-line.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RangoliLineComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
