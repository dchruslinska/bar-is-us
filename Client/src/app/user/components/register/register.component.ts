import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../user-modal.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({ // reactive forms
    login: ['', [Validators.required, Validators.maxLength(32), ]],
    email: ['', [Validators.required, Validators.email, ]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64), ]],
    dateOfBirth: ['', [Validators.required, ]]
  });

  user: User = {
    id: null,
    login: '',
    email: '',
    passwrd: '',
    date_of_birth: null
  };
  startDate = new Date(2003, 0, 1);

  constructor(private fb: FormBuilder,
              private service: UserService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.user.email = this.form.value.email;
    this.user.login = this.form.value.login;
    this.user.passwrd = this.form.value.password;
    this.user.date_of_birth = this.form.value.dateOfBirth;

   // console.log(JSON.stringify(this.user) + ' ready to best to backend');

    this.service.addUser(this.user).subscribe(() => {
      console.log('Created user: ' + this.user.login.toString());
      this.snackBar.open('Zarejestrowano! Zaloguj się.', '', {
        verticalPosition: 'top',
        duration: 2000
      });
    }, (err: HttpResponse<any>) => {
      console.error('nr erroru: ' + err.status);
      this.snackBar.open('Coś poszło nie tak :C.', '', {
        verticalPosition: 'top',
        duration: 2000
      });
    } );
  }

  findUser(): void {
    this.service.getUser(this.form.value.login).subscribe((user: User) => console.log(JSON.stringify(user)));
  }
}
