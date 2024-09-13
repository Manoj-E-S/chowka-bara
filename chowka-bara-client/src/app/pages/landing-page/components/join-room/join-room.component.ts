import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangoliLineComponent } from '../../../../generic-components/rangoli-line/rangoli-line.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'join-room',
    standalone: true,
    imports: [CommonModule, RangoliLineComponent, FormsModule],
    templateUrl: './join-room.component.html',
    styleUrl: './join-room.component.scss',
})
export class JoinRoomComponent {
    username: String = "";
    privatePartyKey: String = "";

    joinRoomFormOnSubmit(event: Event) {
        event.preventDefault();
        console.log(this.username, this.privatePartyKey);
    }
}
