import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartComponent} from './bar/components/start/start.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './user/components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {DescriptionComponent, DrinkPreviewComponent} from './drink-preview/drink-preview.component';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {LoginPanelComponent} from './user/components/login/login-panel.component';
import { ChangePasswordComponent } from './user/components/change-password/change-password.component';
import { FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AuthGuard} from './shared/services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    NavMenuComponent,
    DrinkPreviewComponent,
    LoginPanelComponent,
    ChangePasswordComponent,
    WelcomePageComponent,
    DescriptionComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatRippleModule,
        FormsModule,
        MatSnackBarModule,
        MatGridListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  entryComponents: [
    DrinkPreviewComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
