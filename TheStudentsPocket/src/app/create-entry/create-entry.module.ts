import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CreateEntryPage} from './create-entry.page';
import {MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: CreateEntryPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
    ],
    declarations: [CreateEntryPage]
})
export class CreateEntryPageModule {
}
