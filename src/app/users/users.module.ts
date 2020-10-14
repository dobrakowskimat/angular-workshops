import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from '../components/user/user.component';
import { CustomFormControlComponent } from '../shared/custom-form-control/custom-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
  entryComponents: [CustomFormControlComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
