import { Component, inject, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AuthenticationService } from '../../services/authentication.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css'
})
export class DestinationDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute){}
  authenticationservice: AuthenticationService=inject(AuthenticationService);
  destination: any = null;
  @Input() country: any = this.route.snapshot.paramMap.get('country');
  @Input() url: any = this.route.snapshot.paramMap.get('imgURL');
  async ngOnInit(): Promise<void> {
    console.log(this.url);
    this.destination = await lastValueFrom(this.authenticationservice.getDestination(this.country));
    console.log(this.destination);
  }

}

