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
    this.addNewProduct();
  }

  public addNewProduct() {
    this.refProducts.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
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
          price.setValidators([Validators.required]);
        }
      }
    );
  }

  public removeProduct(index: number) {
    this.refProducts.removeAt(index);
  }

  onSubmit() {}
}
