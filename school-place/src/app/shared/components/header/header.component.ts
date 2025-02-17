import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router,private authservice:AuthService) {}

  logout(): void {
    const refreshToken = localStorage.getItem('refresh_token');
    this.authservice.logout(refreshToken);
    localStorage.removeItem('JWT');
    this.router.navigate(['login']);
  }

}
