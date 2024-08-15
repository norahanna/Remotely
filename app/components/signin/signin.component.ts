import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor (private router: Router) {

  }

  authService: AuthenticationService = inject(AuthenticationService);
  // router: Router = inject(Router);

  signInDetails = {
    username: '',
    password: '',
  }

  signIn(form:any){
    if(form.form.valid){
      this.authService.signIn(form.form.value).subscribe((result:any) => {
        localStorage.setItem('token', result);
        console.log(result);
        this.router.navigate(['/home-component', {logged: true}]);
      })
    
    // this.authService.signIn(this.signInDetails).subscribe((result:any) => {
    //   console.log(result)
    //   this.router.navigate(['/home', {}])
    // });
  }
}
}
