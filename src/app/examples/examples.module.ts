import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/calendar';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CalendarModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent
    ]
})
export class ExamplesModule { }
