import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { CrudService } from "./../../../core/services/crud.service";
import { Animal } from "src/app/models/Animal.model";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"],
})
export class CrudComponent implements OnInit {
  animals: Animal[];
  constructor(private _crudService: CrudService, private dialog: MatDialog) {}

  ngOnInit() {
    this.GetAnimals();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  private GetAnimals() {
    this._crudService
      .GetAnimals()
      .subscribe((animal: Animal[]) => (this.animals = animal));
  }

  public DeleteAnimal(id) {
    this._crudService.DeleteAnimal(id).subscribe(() => {
      this.GetAnimals();
    });
  }
}
