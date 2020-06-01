import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://home-kit.lifebank.ng';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  public login(formData) {
    console.log(formData);
    return this.http.post('http://home-kit.lifebank.ng/v1/login/', formData);
  }
}

