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
import { AuthComponent } from './modules/auth/auth.component';
import { UnauthComponent } from './modules/unauth/unauth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { AuthModule } from './modules/auth/auth.module';
import { UnauthModule } from './modules/unauth/unauth.module';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    ButtonComponent,
    AuthComponent,
    UnauthComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    UnauthModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
