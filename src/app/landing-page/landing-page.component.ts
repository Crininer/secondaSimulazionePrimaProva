import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Park, ParkList } from 'src/models/park-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  parks: Park[];

  optionsForm = new FormGroup({
    orderBy: new FormControl('distanza+', Validators.required),
  });

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.parks = data.parks.sort(
        (firstPark, secondPark) => firstPark.distance - secondPark.distance
      );
    });

    this.optionsForm.controls['orderBy'].valueChanges.subscribe(
      (value: string) => {
        if (value === 'distanza+') {
          this.parks = this.parks.sort(
            (firstPark, secondPark) => firstPark.distance - secondPark.distance
          );
        } else if (value === 'distanza-') {
          this.parks = this.parks.sort(
            (firstPark, secondPark) => secondPark.distance - firstPark.distance
          );
        }
      }
    );
  }
  public getJSON(): Observable<ParkList> {
    return this.http.get<ParkList>(this._jsonURL);
  }
  ngOnInit(): void {}

  public getTypes(park: Park) {
    // // Tentativo di estrarre dalle attrazioni fallito
    // let parkAttractionTypes = park.attractions.map((attraction) => {
    //   return attraction.type;
    // });
    // console.log('ParkAttractionTypes ', parkAttractionTypes);
    // let uniqueParkAttractionTypes = new Set(parkAttractionTypes);
    // console.log(
    //   'uniqueParkAttractionTypes ',
    //   uniqueParkAttractionTypes.entries
    // );
    // return new Array(uniqueParkAttractionTypes.entries).join(', ');

    return park.attractionTypes.join(', ');
  }
}
