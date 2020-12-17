import { NgModule } from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharesModule} from '../../shares/shares.module';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        SharesModule
    ],
    exports: [],
})
export class DashboardModule { }
