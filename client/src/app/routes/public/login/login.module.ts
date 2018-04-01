import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {LoginFormModule} from '../../../common/login-form/login-form.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule,
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule {
}
