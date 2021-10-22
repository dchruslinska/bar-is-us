import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Login} from '../../models/login.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login-panel.component.html',
  styleUrls: ['../user-modal.scss']
})
export class LoginPanelComponent implements OnInit {

  form = this.fb.group({
    nickname: ['', Validators.required],
    password: ['', Validators.required],
  });
  private user: Login = {
    nickname: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
              private service: UserService,
              private dialogRef: MatDialogRef<LoginPanelComponent>,
              private dialog: MatDialog,
              private router: Router,
              private snack: MatSnackBar,
              private authService: AuthService, ) {
  }

  ngOnInit(): void {
  }

  onSignUp(): void {
    this.dialog.open(RegisterComponent, {
      minWidth: 400
    });
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.user.nickname = this.form.value.nickname;
    this.user.password = this.form.value.password;

    console.log(JSON.stringify(this.user) + ' ready to be sent to backend'); // TODO: Replace with dialogRef.close()
    this.authService.login().subscribe(res => {
      if (res) {
        this.router.navigate(['/home']).then( () => {
          this.snack.open('Welcome to our page!', '', {
            duration: 1000
          });
        });
      }
    });
  }
}
