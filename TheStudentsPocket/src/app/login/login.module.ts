import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {LoginPage} from './login.page';

import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
