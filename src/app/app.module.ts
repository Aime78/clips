import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }