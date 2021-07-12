import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Park, ParkList } from 'src/models/park-data';

@Component({
  selector: 'app-park-details-page',
  templateUrl: './park-details-page.component.html',
  styleUrls: ['./park-details-page.component.scss'],
})
export class ParkDetailsPageComponent implements OnInit {
  private _jsonURL = 'assets/data.json';
  loading = false;

  park: Park;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.loading = true;

    this.getJSON().subscribe((data) => {
      let index = data.parks.findIndex((value) => {
        return value.id == activatedRoute.snapshot.paramMap.get('id');
      });

      this.park = data.parks[index];
      this.loading = false;
    });
  }

  public getJSON(): Observable<ParkList> {
    return this.http.get<ParkList>(this._jsonURL);
  }

  ngOnInit(): void {}
}
