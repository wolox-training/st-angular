import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isLogin = true;
  authForm: FormGroup;
  label_button_up = 'Login';
  label_button_down = 'Sign Up';
  badEmail = false;

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
        validator: this.mustMatch('password', 'password_confirmation')
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

  checkInput(input: string) {
    return !this.authForm.get('user')['controls'][input].valid && this.authForm.get('user')['controls'][input].touched;
  }

  checkPasswords(group: FormGroup) {
  let pass = group.get('password').value;
  let confirmPass = group.get('password_confirmation').value;

  return pass === confirmPass ? null : { notSame: true }     
  }

  onSignUp () {
    this.isLogin = !this.isLogin
    if (!this.isLogin) this.authForm.get('user').get('password_confirmation').setValidators([Validators.required])
    let intermediate = this.label_button_up;
    this.label_button_up = this.label_button_down;
    this.label_button_down = intermediate;
    this.authForm.reset();
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) return

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
