import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/services/local-storage.service';

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
    private router: Router,
    private store: LocalStorageService
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
        this.store.save('user', JSON.stringify(resp.body.data));
        this.store.save('access-token', resp.headers.get('access-token'));
        this.store.save('client', resp.headers.get('client'));
        this.store.save('uid', resp.headers.get('uid'));
        this.router.navigateByUrl('/books');
      }); 
  }
}
