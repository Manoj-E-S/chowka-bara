import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangoliLineComponent } from '../rangoli-line/rangoli-line.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RangoliLineComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showRules() {
    alert("'How to play?' not yet Implemented");
  }
}
