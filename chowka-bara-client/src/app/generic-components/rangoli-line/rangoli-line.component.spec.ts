import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoliLineComponent } from './rangoli-line.component';

describe('RangoliLineComponent', () => {
    let component: RangoliLineComponent;
    let fixture: ComponentFixture<RangoliLineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RangoliLineComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(RangoliLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
