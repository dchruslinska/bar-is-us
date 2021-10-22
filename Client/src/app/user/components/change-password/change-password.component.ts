import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  reggForm = this.form.group( {
    oldpassword: [''],
    newpassword: [''],
    repeatpassword: ['']
  });
  constructor(private snackBar: MatSnackBar, private form: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.reggForm.value.newpassword === this.reggForm.value.repeatpassword)
    {
      // tutaj yno łącznie z back end ale ja jestem szmatą i need pomoc bo nie czaje tego co zrobiles w register
      //
      // ale dodalem snackbar bo fajny taki ładny amerykański
      //
      this.snackBar.open('Password Changed!', '', {duration: 3000, });
    } else if (this.reggForm.value.newpassword !== this.reggForm.value.repeatpassword) {
      this.snackBar.open('Password arent the same!', '', {duration: 3000, });
    }

  }

}
