import { CustomersRoutingModule } from "./shared/routes/customers-routing.module";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddAnimalModule } from "./shared/components/add-animal/add-animal.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./shared/components/crud/crud.module").then((m) => m.CrudModule),
  },
  {
    path: "add/animal",
    loadChildren: () =>
      import("./shared/components/add-animal/add-animal.module").then(
        (m) => m.AddAnimalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomersRoutingModule],
  exports: [RouterModule, AddAnimalModule],
})
export class AppRoutingModule {}
