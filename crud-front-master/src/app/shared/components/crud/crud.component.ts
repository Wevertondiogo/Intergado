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
  dataSource;
  constructor(private _crudService: CrudService) {}

  ngOnInit() {
    this.GetAnimals();
  }

  private GetAnimals() {
    this.animals$ = this._crudService.GetAnimals();
    this.dataSource = this.animals$;
  }

  public DeleteAnimal(id) {
    this._crudService.DeleteAnimal(id).subscribe(() => {
      this.GetAnimals();
    });
  }
  displayedColumns: string[] = ["id", "manejo", "tag", "options"];
}
