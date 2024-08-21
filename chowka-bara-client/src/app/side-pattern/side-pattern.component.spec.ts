import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePatternComponent } from './side-pattern.component';

describe('SidePatternComponent', () => {
    let component: SidePatternComponent;
    let fixture: ComponentFixture<SidePatternComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SidePatternComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SidePatternComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
