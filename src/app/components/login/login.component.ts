import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  loginUser:any={}

  constructor(private authService:AuthService){}

  ngOnInit(): void {
      
  }

  login(loginUser){
    this.authService.login(loginUser);
  }
}
