import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EditEntryPage} from './edit-entry.page';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
} from "@angular/material";

const routes: Routes = [
    {
        path: '',
        component: EditEntryPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    declarations: [EditEntryPage]
})
export class EditEntryPageModule {
}
