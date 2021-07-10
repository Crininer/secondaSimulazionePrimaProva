import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  quickLinks = [
    {
      text: 'Anagrafica',
      destination: 'anagrafica',
    },
    {
      text: "Qualcos'altro",
      destination: 'altro',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
