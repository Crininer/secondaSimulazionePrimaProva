import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Park, ParkList } from 'src/models/park-data';

@Component({
  selector: 'app-booking-form-page',
  templateUrl: './booking-form-page.component.html',
  styleUrls: ['./booking-form-page.component.scss'],
})
export class BookingFormPageComponent implements OnInit {
  private _jsonURL = 'assets/data.json';
  loading = false;
  bookingForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthdate: new FormControl(''),
    email: new FormControl('', Validators.email),
    registerMe: new FormControl(false),
  });

  travelForm = new FormGroup({
    departure: new FormControl('', Validators.required),
    return: new FormControl('', Validators.required),
    pullman: new FormControl(true, Validators.required),
    airplane: new FormControl(true, Validators.required),
  });

  quickLinks = [
    {
      text: 'Anagrafica',
      destination: 'anagraphics',
    },
    {
      text: 'Viaggio',
      destination: 'travel',
    },
  ];

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

    this.bookingForm.controls['registerMe'].valueChanges.subscribe(
      (checked) => {
        if (checked) {
          this.bookingForm
            .get('birthdate')
            .setValidators([Validators.required]);
          this.bookingForm
            .get('email')
            .setValidators([Validators.required, Validators.email]);

          this.bookingForm.get('birthdate').updateValueAndValidity();
          this.bookingForm.get('email').updateValueAndValidity();
        } else {
          this.bookingForm.get('birthdate').setValidators([]);
          this.bookingForm.get('email').setValidators([Validators.email]);
          this.bookingForm.get('birthdate').updateValueAndValidity();
          this.bookingForm.get('email').updateValueAndValidity();
        }
      }
    );
  }

  public getJSON(): Observable<ParkList> {
    return this.http.get<ParkList>(this._jsonURL);
  }

  ngOnInit(): void {}
}
