import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSidePatternComponent } from './animated-side-pattern.component';

describe('AnimatedSidePatternComponent', () => {
    let component: AnimatedSidePatternComponent;
    let fixture: ComponentFixture<AnimatedSidePatternComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AnimatedSidePatternComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AnimatedSidePatternComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
