import { CrudService } from "./../../../core/services/crud.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Animal } from "src/app/models/Animal.model";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  formAnimal: FormGroup;
  constructor(private fb: FormBuilder, private _crudService: CrudService) {}

  ngOnInit() {
    this.CreateForm();
  }

  private CreateForm() {
    this.formAnimal = this.fb.group({
      manejo: ["", Validators.required],
      tag: ["", Validators.required],
    });
  }

  public AddAnimal() {
    const animal = this.formAnimal.value;
    this._crudService.AddAnimal(animal).subscribe(() => this.GetAnimals());
  }

  private GetAnimals() {
    this._crudService.GetAnimals().subscribe(() => console.log("..."));
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
