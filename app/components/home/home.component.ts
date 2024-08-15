import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @Input() isLoggedIn: Boolean = this.route.snapshot.paramMap.get('logged') ? Boolean(this.route.snapshot.paramMap.get('logged')) : false;
  
  query: String = '';
  ngOnInit(): void {
    console.log(this.isLoggedIn)
  }
  
  constructor (private router: Router, private route: ActivatedRoute) {}
  loadDestination(destination: any, url: String = ""){
    //event.preventDefault();
    console.log('im here ' + url)
    this.router.navigate(['/destination-detail', {country: destination, imgURL: url}]);

  }
  Search() {
    let url = '';
    switch(this.query.toLowerCase()) {
      case 'thailand':
        url = 'assets/gallery-9.jpg';
        break;
      case 'germany':
        url = 'assets/gallery-1.jpg';
        break;
      case 'indonesia':
        url = 'assets/indonesia.jpg';
        break;
      case 'netherlands':
        url = 'assets/gallery-8.jpg';
        break;
      case 'estonia':
        url = 'assets/estonia.jpg';
        break;
      case 'spain':
        url = 'assets/spain.jp';
        break;
      case 'portugal':
        url = 'assets/portugal.jpg';
        break;
      case 'vietnam':
        url = 'assets/vietnam.jpg';
        break;
      case 'mexico':
        url = 'assets/mexico.jpg';
        break;
      case 'japan':
        url = 'assets/destination-9.jpg';
        break;

      default:
        url = '';
        break;
    
    }

    this.router.navigate(['/destination-detail', {country: this.query, imgURL: url}]);
  }
  loadAbout(){
    //event.preventDefault();
    console.log('im here')
    this.router.navigate(['/about'])

  }
  loadContinent(continent: any){
  }
  signIn(){
    this.router.navigate(['/signin'])
  }
  signUp(){
    this.router.navigate(['/signup'])
  }



}
