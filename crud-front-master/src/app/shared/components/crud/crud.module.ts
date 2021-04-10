import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CrudComponent } from "./crud.component";

import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, RouterModule, MatListModule, MatButtonModule],
  exports: [CrudComponent],
})
export class CrudModule {}
