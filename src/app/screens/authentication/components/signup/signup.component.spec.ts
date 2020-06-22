import { keysToSnakeCase } from '@app/helpers/utils/utils';
import { fillForm } from './../../../../test/utils';
import { userMock } from '@app/test/userMock';
import { AuthenticationComponent } from '@app/screens/Authentication/authentication.component';
import { ButtonComponent } from '@app/components/Button/button.component';
import { UserService } from '@app/services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { SignupComponent } from '@app/screens/authentication/components/signup/signup.component';
import { Routes, Router } from '@angular/router';
import { of } from 'rxjs';



describe('SignUpComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let router;
  const routes: Routes = [
    { path: 'login', component: SignupComponent }
  ];
  const elements = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    passwordConfirmation: null,
    submitButton: null
  };

  const inputs = ['email', 'password', 'firstName', 'lastName', 'passwordConfirmation'];

  beforeEach(async(() => {
    const userServiceStub = () => ({
      createUser: user => ({ subscribe: f => f(userMock) })
    });
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule
      ],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
      ],
      declarations: [
        SignupComponent,
        ButtonComponent,
        AuthenticationComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    router = TestBed.inject(Router);

    inputs.forEach(input => {
      elements[input] = fixture.debugElement.query(By.css(`input[formcontrolname="${input}"]`)).nativeElement;
    });

    elements.submitButton = fixture.debugElement.query(By.css('.primary')).nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create object when press submit', () => {
    fillForm(inputs, elements);
    elements.submitButton.click();
    fixture.detectChanges();

    const formValue = component.authForm.value;

    expect({id: userMock.id, ...keysToSnakeCase(formValue.user) }).toEqual(userMock);
  });

  it('The submit button should be disable when inputs are missing', () => {
    fixture.detectChanges();
    expect(component.authForm.invalid).toBeTruthy();
  });

  it('Should send to login route when create user responds fine', () => {
    const routerNavigateSpy = jest
      .spyOn(router, 'navigate')
      .mockImplementation(() => of(true).toPromise());
    fillForm(inputs, elements);
    elements.submitButton.click();
    component.onSubmit();
    fixture.detectChanges();
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
