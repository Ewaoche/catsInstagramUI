import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  obj = { email: null, password: null };

  constructor(private authservice:AuthService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  login(): void {
    Swal.showLoading();
    this.authservice.loginUser(this.obj).subscribe(success => {
      this.authservice.saveToken(success.token);
      Swal.close();
      this.router.navigate(['/cats']);
    });
   
    
  }

}
