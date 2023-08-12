import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private baseURL: string = "https://api.chucknorris.io/jokes";

  constructor(
    private http: HttpClient
  ) { }

  public list(): Observable<any> {
    return this.http.get(`${this.baseURL}/random`);
  }
}
