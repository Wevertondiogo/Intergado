import { DialogComponent } from "./shared/components/dialog/dialog.component";
import { DialogModule } from "./shared/components/dialog/dialog.module";
import { MatDialogModule } from "@angular/material/dialog";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrudService } from "./core/services/crud.service";
import { CrudComponent } from "./shared/components/crud/crud.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CrudModule } from "./shared/components/crud/crud.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    CrudModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
  exports: [ReactiveFormsModule],
})
export class AppModule {}
