import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }

  onSubmit () {
    this.userService.login(this.loginForm.value)
      .subscribe(resp => {
        localStorage.setItem('user', JSON.stringify(resp.body.data));
        localStorage.setItem('access-token', resp.headers.get('access-token'));
        localStorage.setItem('client', resp.headers.get('client'));
        localStorage.setItem('uid', resp.headers.get('uid'));
        this.router.navigateByUrl('/home');
      }); 
  }
}
