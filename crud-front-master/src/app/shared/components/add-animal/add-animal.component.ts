import { CrudService } from "./../../../core/services/crud.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-add-animal",
  templateUrl: "./add-animal.component.html",
  styleUrls: ["./add-animal.component.scss"],
})
export class AddAnimalComponent implements OnInit {
  formAnimal: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _curdService: CrudService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.CreateForm();
  }

  private CreateForm() {
    this.formAnimal = this.fb.group({
      manejo: ["", Validators.required],
      tag: ["", Validators.required],
    });
  }

  SaveAnimal(form: NgForm) {
    const animal = this.formAnimal.value;
    this._curdService.AddAnimal(animal).subscribe(() => {
      console.log("AnimalSalvo!!!");
      this.openSnackBar();
      form.resetForm();
    });
  }

  openSnackBar() {
    this._snackBar.open("Animal adicionado!", "X", {
      duration: 1500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["snackBar"],
    });
  }

  public get manejoRequired() {
    const controller = this.formAnimal.get("manejo");
    return controller.invalid && controller.errors.required;
  }
  public get tagRequired() {
    const controller = this.formAnimal.get("tag");
    return controller.invalid && controller.errors.required;
  }
}
