import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimatedSidePatternComponent } from '../animated-side-pattern/animated-side-pattern.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { JoinRoomComponent } from '../join-room/join-room.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        AnimatedSidePatternComponent,
        HeaderComponent,
        FooterComponent,
        JoinRoomComponent,
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
