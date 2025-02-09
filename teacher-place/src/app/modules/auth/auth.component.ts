import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isError: boolean = false;
  loginForm: FormGroup ;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }



  login() {
    this.service.login(this.loginForm.value).subscribe((response) => {
      if (response.access) {
        const jwtToken = response.access;
        localStorage.setItem('JWT', jwtToken);
        this.router.navigateByUrl('home');
      } else {
        this.isError = true
      }
    })
  }

}
