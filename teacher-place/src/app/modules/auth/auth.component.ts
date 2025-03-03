import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'] // Correction ici de styleUrl à styleUrls
})
export class AuthComponent   {

  loginForm: FormGroup;
  isError: boolean = false;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  login() {
    this.service.login(this.loginForm.value).subscribe(response => {
      if (response.access) {
        const jwtToken = response.access;
        localStorage.setItem('JWT', jwtToken);
        this.router.navigateByUrl('home');
      }
    }, error => {
      this.isError = true;
    });
  }

}
