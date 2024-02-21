import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isPasswordVisible = false;

  credentials ={
    email:'',
    password:''
  }
  showPassword(){
    this.isPasswordVisible = !this.isPasswordVisible
  }
}
