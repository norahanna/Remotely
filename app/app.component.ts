import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigninComponent, SignupComponent, HomeComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'remotely';

  constructor(private router: Router){}
  ngOnInit(): void {
    //this.router.navigate(['/home-component']);
  }
}

