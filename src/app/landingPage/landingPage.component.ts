import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {MatAccordion} from '@angular/material/expansion';
import {MatDialog} from '@angular/material/dialog';
import {LabPartnerComponent} from '../supplierDialog/lab-partner.component';
import { ToastrService } from 'ngx-toastr';

import { DataService } from '../core/services/data-service.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'landingPage',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageComponent implements OnInit {
  heart = faHeart;
  @ViewChild(MatAccordion, {static: false}) accordion: MatAccordion;
  constructor(
              @Inject(DOCUMENT) document,
              public dialog: MatDialog,
              private dataService: DataService,
              private notification: ToastrService
              ) {}

  ngOnInit(): void { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
     if (window.pageYOffset > 90) {
       const element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
     }
  }

  displayLearnMore(): void {
    const kitElement = document.getElementById('how');
    kitElement.style.display = 'block';
  }

  openDialog() {
    const dialogRef = this.dialog.open(LabPartnerComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.registerLabPartner(JSON.parse(JSON.stringify(result))).subscribe(response => {
          if (!response['ok']) {
            this.notification.error('An error occurred, please try again.', 'Notification');
          } else {
            this.notification.success('Registration successful. An email has been sent to your email address', 'Notification');
          }
        }, error => {
          console.log(error);
        });
      }
    });
  }

  downloadAudioInstruction(): void {
    const link = document.createElement('a');
    link.download = 'how-to-use';
    link.href = '../../assets/audio/how-to-use.mpeg';
    link.click();
  }
}

