import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-partner',
  templateUrl: './lap-partner.component.html',
  styleUrls: ['./lab-partner.component.scss']
})
export class LabPartnerComponent implements OnInit {

  labPartnerForm: FormGroup;
  constructor (
     private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.labPartnerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      org: ['', Validators.required],
    });
  }

  // onSubmit(formValue): void {
  //   this.dataService.postLabPartner(formValue).subscribe(response => {
  //     console.log(response);
  //   },
  //   error => {
  //     console.log(error);
  //   });
  // }
}
