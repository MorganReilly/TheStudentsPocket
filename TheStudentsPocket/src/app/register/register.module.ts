import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {RegisterPage} from './register.page';
import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [
    {
        path: '',
        component: RegisterPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatFormFieldModule
    ],
    declarations: [RegisterPage]
})
export class RegisterPageModule {
}
