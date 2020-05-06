import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }

  onSubmit () {
    this.userService.login(this.loginForm.value)
      .subscribe(resp => {
        console.log('access-token', resp.headers.get('access-token'));
      }); 
  }
}
