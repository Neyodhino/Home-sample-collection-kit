import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-request-kit',
  templateUrl: './request-kit.component.html',
  styleUrls: ['./request-kit.component.scss']
})
export class RequestKitComponent implements OnInit {


  @ViewChild('picker', {static: false}) picker: any;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];
  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];
  userDetails;
  requestForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      id: [JSON.parse(localStorage.getItem('loginDetails')).id],
      dateTime: ['', Validators.required],
      phone: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  submit() {
   console.log( this.requestForm.value);
  }
}
