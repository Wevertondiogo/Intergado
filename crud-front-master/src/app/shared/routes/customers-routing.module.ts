import { CrudComponent } from "./../components/crud/crud.component";
import { AddAnimalComponent } from "./../components/add-animal/add-animal.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: CrudComponent },
  { path: "add/animal", component: AddAnimalComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
