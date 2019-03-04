import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CreateSubjectPage} from './create-subject.page';
import {MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: CreateSubjectPage
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
    declarations: [CreateSubjectPage],
    entryComponents: [CreateSubjectPage]
})
export class CreateSubjectPageModule {
}
