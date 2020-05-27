import {NgModule} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {NavbarComponent} from './navbar/navbar.cmponent';

@NgModule({
  imports: [FontAwesomeModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class CoreModule {}
