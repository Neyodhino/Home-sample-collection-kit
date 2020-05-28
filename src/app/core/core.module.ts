import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.cmponent';

@NgModule({
  imports: [FontAwesomeModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class CoreModule {}
