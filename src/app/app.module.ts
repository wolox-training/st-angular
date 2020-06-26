import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthModule } from '@app/modules/auth/auth.module';
import { UnauthModule } from '@app/modules/unauth/unauth.module';
import { PipesModule } from '@app/modules/pipes/pipes.module';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from '@app/app.component';
import { AuthenticationComponent } from '@app/screens/Authentication/authentication.component';
import { SignupComponent } from '@app/screens/Authentication/components/Signup/signup.component';
import { LoginComponent } from '@app/screens/Authentication/components/Login/login.component';
import { ButtonComponent } from '@app/components/Button/button.component';
import { AuthComponent } from '@app/modules/auth/auth.component';
import { UnauthComponent } from '@app/modules/unauth/unauth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { PopUpComponent } from '@app/components/pop-up/pop-up.component';

import { LocalStorageService } from '@app/services/local-storage.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    ButtonComponent,
    AuthComponent,
    UnauthComponent,
    BookListComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    UnauthModule,
    PipesModule,
    StoreModule.forRoot({}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es'
    })
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
