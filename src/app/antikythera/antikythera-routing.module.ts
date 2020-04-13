import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntikytheraComponent } from "./antikythera.component";

const routes: Routes = [
    {
      path: '',
      component: AntikytheraComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AntikytheraRoutingModule {
}
