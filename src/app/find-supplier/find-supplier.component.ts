import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data-service.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { LabPartnerComponent } from '../supplierDialog/lab-partner.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-find-supplier',
  templateUrl: './find-supplier.component.html',
  styleUrls: ['./find-supplier.component.scss']
})
export class FindSupplierComponent implements OnInit {
  heart = faHeart;

  suppliers: Array<object>;

  constructor(
    private dataService: DataService,
    private auth: AuthenticationService,
    public dialog: MatDialog,
    private notification: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getSuppliers().subscribe(response => {
      this.suppliers = response['description'];
      console.log(this.suppliers);
    },
    error => {
      console.log(error);
    });
   }


   openSupplierDialog() {
    const dialogRef = this.dialog.open(LabPartnerComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.parse(JSON.stringify(result)));
      this.dataService.registerLabPartner(JSON.stringify(JSON.stringify(result))).subscribe(response => {
        console.log(response);
        if (!response['ok']) {
          this.notification.error('An error occurred, please try again.', 'Notification');
        } else {
          this.notification.success('Registration successful. An email has been sent to your email address', 'Notification');
        }
      });
    },
    error => {
      console.log(error);
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.auth.login(JSON.parse(JSON.stringify(result))).subscribe(response => {
        console.log(response);
        if (!response['ok']) {
          this.notification.error(response['description'], 'Notification');
        } else {
          localStorage.setItem('loginDetails', JSON.stringify(response['description']));
          this.router.navigate(['/dashboard']);
          this.notification.success('Welcome to your dashboard', 'Notification');
        }
      },
      error => {
        console.log(error);
      });
    });
  }
}
