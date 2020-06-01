import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import {NavbarComponent} from './navbar/navbar.cmponent';

@NgModule({
  imports: [FontAwesomeModule, RouterModule, MatMenuModule, MatIconModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class CoreModule {}
