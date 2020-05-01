import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './screens/Authentication/authentication.component';
import { SignupComponent } from './screens/Authentication/components/Signup/signup.component';
import { LoginComponent } from './screens/Authentication/components/Login/login.component';
import { ButtonComponent } from './components/Button/button.component';
import { HomeComponent } from './screens/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    ButtonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
