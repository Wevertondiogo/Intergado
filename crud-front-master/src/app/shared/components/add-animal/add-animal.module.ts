import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AddAnimalComponent } from "./add-animal.component";

import { MatButtonModule } from "@angular/material/button";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [AddAnimalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AddAnimalComponent],
})
export class AddAnimalModule {}
