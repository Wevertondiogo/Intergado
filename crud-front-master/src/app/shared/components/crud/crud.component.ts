import { CrudService } from "./../../../core/services/crud.service";
import { Component, OnInit } from "@angular/core";
import { Animal } from "src/app/models/Animal.model";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"],
})
export class CrudComponent implements OnInit {
  constructor(private _crudService: CrudService) {}

  ngOnInit() {
    this.getAnimals;
  }

  private getAnimals() {
    this._crudService
      .getAnimals()
      .subscribe((animal: Animal) => console.log(animal));
  }
}
