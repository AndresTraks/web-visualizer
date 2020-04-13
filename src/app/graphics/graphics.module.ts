import { NgModule } from "@angular/core";
import { AppCanvasComponent } from "./app-canvas.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AppCanvasComponent],
    imports: [CommonModule],
    exports: [AppCanvasComponent],
    providers: []
  })
export class GraphicsModule {
}
