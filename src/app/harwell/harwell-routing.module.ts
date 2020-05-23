import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HarwellComponent } from "./harwell.component";

const routes: Routes = [
    {
      path: '',
      component: HarwellComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HarwellRoutingModule {
}
