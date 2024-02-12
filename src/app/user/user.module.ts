import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthModalComponent
  ],
})

export class UserModule {}
