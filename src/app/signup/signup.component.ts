import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      user: this.formBuilder.group({
        first_name: '',
        last_name: '',
        email: [null, Validators.compose([Validators.required, Validators.email])],
        password: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+[0-9]+')])],
        password_confirmation: [''],
        locale: 'en'
      }, {
        validator: this.checkConfirmation('password', 'password_confirmation')
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value) {
    value.user.locale = 'en'
    console.log(value);
    this.authForm.reset();
  }

  checkConfirmation(password: string, passwordConfirmation: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup.get(password);
      const confirmPass = formGroup.get(passwordConfirmation);

      return pass.value !== confirmPass.value && confirmPass.setErrors({ notSame: true })
    }
  }

  checkInput(input: string) {
    return this.authForm.get(`user.${input}`).invalid && this.authForm.get(`user.${input}`).touched;
  }

}
