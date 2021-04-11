import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

import { CrudService } from "./../../../core/services/crud.service";
import { Animal } from "src/app/models/Animal.model";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"],
})
export class CrudComponent implements OnInit {
  animals$: Observable<Animal[]>;
  constructor(private _crudService: CrudService) {}

  ngOnInit() {
    this.GetAnimals();
  }

  private GetAnimals() {
    this.animals$ = this._crudService.GetAnimals();
  }

  public DeleteAnimal(id) {
    this._crudService.DeleteAnimal(id).subscribe(() => {
      this.GetAnimals();
    });
  }
}
