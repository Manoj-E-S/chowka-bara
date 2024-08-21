import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePatternComponent } from '../side-pattern/side-pattern.component';

@Component({
    selector: 'animated-side-pattern',
    standalone: true,
    imports: [CommonModule, SidePatternComponent],
    templateUrl: './animated-side-pattern.component.html',
    styleUrl: './animated-side-pattern.component.scss',
})
export class AnimatedSidePatternComponent implements OnInit {
    @Input() pos: string = '';

    ngOnInit() {
        this.setRollupRolldown();
        this.startAnimation_rollup_rolldown();
    }

    rollup: boolean = false;
    rolldown: boolean = false;
    setRollupRolldown() {
        if (this.pos !== '') {
            this.rollup = this.pos === 'right';
            this.rolldown = this.pos === 'left';
        }
    }

    cssAnimationDelay_rollup_rolldown: number = 10000;
    startAnimation_rollup_rolldown() {
        setInterval(() => {
            this.rotatePatterns();
        }, this.cssAnimationDelay_rollup_rolldown);
    }

    patterns: number[] = [1, 2, 3];
    rotatePatterns() {
        const firstPattern = this.patterns.shift(); // Remove the first side-pattern element
        if (firstPattern !== undefined) {
            this.patterns.push(firstPattern); // Push it to the end
        }
    }
}
