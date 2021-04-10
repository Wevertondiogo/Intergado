import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CrudComponent } from "./crud.component";

import { DialogModule } from "./../dialog/dialog.module";

import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, MatListModule, MatButtonModule, DialogModule],
  exports: [CrudComponent],
})
export class CrudModule {}
