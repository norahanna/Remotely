import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor (private router: Router) {

  }
  signUpDetails = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  }

  authService:AuthenticationService = inject(AuthenticationService);

  signUp(form:any){
    console.log(form);
    if(form.valid){
      this.authService.signUp(form.form.value).subscribe((result:any) => {
        console.log(result);
        this.router.navigate(['/home-component']);
      });
    }
    
  }

}
