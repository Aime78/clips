import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClipsListComponent } from "./clips-list/clips-list.component";
import { HomeComponent } from "./home/home.component";
import { FbTimestampPipe } from "./pipes/fb-timestamp.pipe";
import { RouterModule } from "@angular/router";
import { ClipComponent } from "./clip/clip.component";


@NgModule({
    declarations: [
        ClipsListComponent,
        HomeComponent,
        FbTimestampPipe,
        ClipComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ClipsListComponent,
        HomeComponent,
        FbTimestampPipe,
        ClipComponent
    ]
})
export class ParentModule {}