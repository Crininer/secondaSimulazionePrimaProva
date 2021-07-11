import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;

  submitting = false;
  showRequiredErrors = false;
  maritalStatuses = ['Single', 'Sposato'];

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    maritalStatus: new FormControl('', [Validators.required]),
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
    this.addNewProduct();
  }

  public addNewProduct() {
    this.refProducts.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        price: new FormControl('', [Validators.required, Validators.min(0)]),
        description: new FormControl('', Validators.required),
        notAvailable: new FormControl(false, Validators.required),
      })
    );
    let product = this.refProducts.controls[
      this.refProducts.length - 1
    ] as FormGroup;
    (product.controls['notAvailable'] as FormControl).valueChanges.subscribe(
      (checked) => {
        let price = product.controls['price'] as FormControl;
        if (checked) {
          price.disable();
          price.setValue('');
          price.setValidators([]);
        } else {
          price.enable();
          price.setValidators([Validators.required, Validators.min(0)]);
          price.updateValueAndValidity();
        }
      }
    );
  }

  public removeProduct(index: number) {
    this.refProducts.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        console.log(this.form.value);
      }, 1000);
    }
  }
}
