import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services/user.service';
import { keysToSnakeCase } from '@app/helpers/utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      user: this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, Validators.compose([Validators.required, Validators.email])],
        password: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+[0-9]+')])],
        passwordConfirmation: [''],
        locale: 'en'
      }, {
        validator: this.checkConfirmation('password', 'passwordConfirmation')
      })
    });
  }

  onSubmit() {
    this.authForm.value.user = keysToSnakeCase(this.authForm.value.user);
    this.userService
    .createUser(this.authForm.value.user)
    .subscribe(data => {
      this.authForm.reset();
      this.router.navigate(['/login']);
    })
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
