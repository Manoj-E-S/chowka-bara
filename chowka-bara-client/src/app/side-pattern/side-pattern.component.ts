import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'side-pattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-pattern.component.html',
  styleUrl: './side-pattern.component.scss'
})
export class SidePatternComponent {
  @Input() pos: string = '';
  @Input() rollup: boolean = false;
  @Input() rolldown: boolean = false;
  
  X1: number = 36.5;
  X2: number = 38.5;
  startY: number = 0;
  endY: number = 50;
}
