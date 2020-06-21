import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import { RequestKitComponent } from '../request-kit/request-kit.component';
import { Router } from "@angular/router";

import { DataService } from '../core/services/data-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  signOut = faSignOutAlt;
  heart = faHeart;
  userDetails;
  userFirstName;
  userLastName;
  responseMessage;
  pickUp;

  constructor(public dialog: MatDialog,
              private dataService: DataService,
              private notification: ToastrService,
              private router: Router
    ) { }

    ngOnInit(): void {
      this.userDetails = JSON.parse(localStorage.getItem('loginDetails'));
      this.userLastName = this.userDetails.lname;
      this.userFirstName = this.userDetails.fname;
      this.dataService.getDashboardInformation({"id": this.userDetails.id}).subscribe(response => {
        this.responseMessage = response['message'];
        this.pickUp = Number(this.responseMessage['Pick-Up']);
      },
      error => {
        console.log(error);
      });
     }

  openDialog() {
    const dialogRef = this.dialog.open(RequestKitComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.requestKit(result).subscribe(response => {
          if (!response['ok']) {
              this.notification.error('You request failed. Please try again.', 'Notification');
            } else {
              this.notification.success('Your request was successful', 'Notification');
              window.location.reload();
            }
        },
        error => {
          console.log(error);
        });
      }
    });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/home']);
    this.notification.success('Logged out successfully', 'Notification');
  }

}
