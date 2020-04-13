import { Component, ViewChild, OnInit } from "@angular/core";
import { AntikytheraScene } from "./antikythera-scene";
import { AppCanvasComponent } from "../graphics/app-canvas.component";

@Component({
    selector: 'antikythera-component',
    templateUrl: './antikythera.component.html'
})
export class AntikytheraComponent implements OnInit {
    scene: AntikytheraScene;
    @ViewChild(AppCanvasComponent) appCanvas: AppCanvasComponent;

    ngOnInit(): void {
        const gl = this.appCanvas.surface.nativeElement.getContext('webgl');
        if (gl) {
            const scene = new AntikytheraScene(gl);
            this.appCanvas.setScene(scene, gl);
        }
    }
}
