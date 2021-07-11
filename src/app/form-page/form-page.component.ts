import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    products: new FormArray([]),
  });

  refProducts: FormArray;

  quickLinks = [
    {
      text: 'Anagrafica',
      destination: 'anagrafica',
    },
    {
      text: 'Prodotti',
      destination: 'prodotti',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.refProducts = this.form.controls['products'] as FormArray;
    this.refProducts.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
      })
    );
  }

  onSubmit() {}
}
