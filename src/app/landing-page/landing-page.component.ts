import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Park, ParkList } from 'src/models/park-data';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  private _jsonURL = 'assets/data.json';
  parks: Park[];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.parks = data.parks;
    });
  }
  public getJSON(): Observable<ParkList> {
    return this.http.get<ParkList>(this._jsonURL);
  }
  ngOnInit(): void {}
}
