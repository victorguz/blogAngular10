import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { NavbarComponent } from './components/page/navbar/navbar.component';
import { AboutComponent } from './components/users/about/about.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Material
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
