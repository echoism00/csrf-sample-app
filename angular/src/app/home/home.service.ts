import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {
    console.log('HomeService constructor');
  }

  getCities() {
    return lastValueFrom(
      this.http.get('http://localhost:8000/api/user', { withCredentials: true })
    );
  }
  transfer(params: { name: string; amount: number }) {
    return lastValueFrom(
      this.http.post(
        'http://localhost:3000/transfer',
        { params },
        {
          withCredentials: true,
        }
      )
    );
  }

  logout() {
    return lastValueFrom(this.http.post('http://localhost:8000/api/logout',{}, {
      withCredentials: true,
    }));
  }
}
