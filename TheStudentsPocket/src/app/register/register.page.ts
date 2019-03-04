import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  regUser: any = [];

  constructor(private api: ApiService) {
  }

  /**
   * @title Registers a new student into the database
   * @desc this function allows the user to register an account with on the database.
   * This will allow the user access his/her records upon login.
   * */
  registerUser(form: NgForm) {
    // TO-DO Validation to be added
    // Push data to api => to be pushed to database.
    this.api.registerStudent(form.value.idNum, form.value.firstName, form.value.lastName, form.value.pin).subscribe(() => {
      // user registered, now run login page.
    });
    console.log(form.value);
    form.resetForm(); // Reset the form
  }// End register user function

  ngOnInit(): void {
  }
}// End class
