import { fillForm } from './../../../../test/utils';
import { LocalStorageService } from '@app/services/local-storage.service';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LoginComponent } from '@app/screens/Authentication/components/Login/login.component';
import { userMock } from '@app/test/userMock';
import { AuthenticationComponent } from '@app/screens/Authentication/authentication.component';
import { ButtonComponent } from '@app/components/Button/button.component';
import { UserService } from '@app/services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';
import { of } from 'rxjs';
import { storeMock } from '@app/test/storeMock';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router;
  let submitButton;
  const routes: Routes = [
    { path: 'books', component: LoginComponent }
  ];
  const inputs = ['email', 'password'];

  const elements = {
    email: null,
    password: null
  };

  const loginResponse = {
    body: { data: userMock },
    headers: new Map([
      ['client', storeMock.client],
      ['uid', storeMock.uid],
      ['access-token', storeMock['access-token']]
    ])
  };

  beforeEach(async(() => {
    const userServiceStub = () => ({
      login: user => ({ subscribe: f => f(loginResponse) })
    });
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        TranslateModule.forRoot({})
      ],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        LocalStorageService,
        TranslateService
      ],
      declarations: [
        LoginComponent,
        ButtonComponent,
        AuthenticationComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    router = TestBed.inject(Router);

    elements.email = fixture.debugElement.query(By.css('input[formcontrolname="email"]')).nativeElement;
    elements.password = fixture.debugElement.query(By.css('input[formcontrolname="password"]')).nativeElement;

    submitButton = fixture.debugElement.query(By.css('.primary')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create object when press submit', () => {
    fillForm(inputs, elements);
    submitButton.click();
    fixture.detectChanges();
    expect(component.loginForm.value).toEqual({ email: userMock.email, password: userMock.password });
  });

  it('The submit button should be disable when inputs are missing', () => {
    fixture.detectChanges();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('Should send to Books route when create user responds fine', () => {
    const routerNavigateSpy = jest
      .spyOn(router, 'navigateByUrl')
      .mockImplementation(() => of(true).toPromise());
    fillForm(inputs, elements);
    component.onSubmit();
    fixture.detectChanges();
    expect(routerNavigateSpy).toHaveBeenCalledWith('/books');
  });

});
