import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  
  constructor( public router: Router) { }

  forgotPass = { email: null, smsOrEmail: 2 };
  resetPass = { email: null, securityCode: null, newPassword: null, confirmPassword: null };
  displayReset = false;
  ngOnInit(): void {
  }

  forgotmypassword(): void {
    
  }

  resetmypassword(): void {
   
  }

}
