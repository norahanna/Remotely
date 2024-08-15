import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  // jwtHelper: JwtHelperService = inject(JwtHelperService);

  signIn(data: any){
    const headers= new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options= {headers: headers,username:data.username, password:data.password}
    return this.http.post('http://localhost:3000/login', options);
  }

  signUp(data: {}){
    return this.http.post('http://localhost:3000/register/', data);
  }
  getDestination(destination: any){
    console.log(destination)
    const headers= new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options= {headers: headers}
    return this.http.get(`http://localhost:3000/destinations/${destination}`, options)
  }
  getContinent(continent: any){
    console.log(continent)
    const headers= new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options= {headers: headers}
    return this.http.get(`http://localhost:3000/continents/${continent}`, options)
  }

  // isAuthenticated(){
  //   const token = localStorage.getItem('token');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
}