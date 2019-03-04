import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditSubjectPage } from './edit-subject.page';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: EditSubjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  declarations: [EditSubjectPage]
})
export class EditSubjectPageModule {}
