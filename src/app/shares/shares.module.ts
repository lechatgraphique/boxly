import { NgModule } from '@angular/core';
import {BoardListComponent} from './components/board-list/board-list.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';

@NgModule({
    declarations: [
        BoardListComponent,
        DropdownComponent
    ],
    imports: [],
    exports: [
        BoardListComponent,
        DropdownComponent
    ]
})

export class SharesModule{ }
