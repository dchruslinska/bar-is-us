import {Component, OnInit} from '@angular/core';
import {Module} from '../models/module.model';
import {LoginPanelComponent} from '../user/components/login/login-panel.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  modules: Module[] = [
    {link: '/register', icon: 'app_registration', name: 'Registration'},
    {link: `/login`, icon: 'login', name: 'Login'},
    {link: '/change-password', icon: 'app_registration', name: 'Change Password'}
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(LoginPanelComponent, {
      minWidth: 400
    });
  }
}
