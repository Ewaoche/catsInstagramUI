import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
obj= {name:null, email:null, password:null, address:null}
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    Swal.showLoading();
    this.authservice.registerUser(this.obj).subscribe(success => {
      console.log(success);
      Swal.close();
       this.router.navigate(['/login']);
    });
  }
}
