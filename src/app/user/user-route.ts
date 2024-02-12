import { Route, RouterModule } from "@angular/router";
import { AuthModalComponent } from "./auth-modal/auth-modal.component";
import { NgModule } from "@angular/core";

const routes:Route[] = [{
    path:'login', component: AuthModalComponent
}]
 @NgModule({
    imports:[RouterModule.forRoot(routes)]
 })
export class UserRoutes{}