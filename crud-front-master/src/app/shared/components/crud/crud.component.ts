import { CrudService } from "./../../../core/services/crud.service";
import { Component, OnInit } from "@angular/core";
import { Animal } from "src/app/models/Animal.model";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"],
})
export class CrudComponent implements OnInit {
  animals: Animal[];
  constructor(private _crudService: CrudService) {}

  ngOnInit() {
    this.GetAnimals();
    // this.AddAnimal();
    // this.DeleteAnimal();
  }

  private GetAnimals() {
    this._crudService
      .GetAnimals()
      .subscribe((animal: Animal[]) => (this.animals = animal));
  }

  public AddAnimal() {
    this._crudService
      .AddAnimal({ manejo: "Albino", tag: "87458548" })
      .subscribe(() => console.log("Animal adicionado"));
  }

  public DeleteAnimal() {
    this._crudService
      .DeleteAnimal(1)
      .subscribe(() => console.log("Animal deletado!"));
  }
}
