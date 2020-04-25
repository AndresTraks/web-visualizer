import { Component, ViewChild, OnInit } from "@angular/core";
import { AntikytheraScene } from "./antikythera-scene";
import { AppCanvasComponent } from "../graphics/app-canvas.component";

@Component({
    selector: 'antikythera-component',
    templateUrl: './antikythera.component.html',
    styleUrls: ['./antikythera.component.css']
})
export class AntikytheraComponent implements OnInit {
    scene: AntikytheraScene;
    @ViewChild(AppCanvasComponent, { static: true }) appCanvas: AppCanvasComponent;

    isOrtographicProjection: boolean = false;

    ngOnInit(): void {
        const gl = this.appCanvas.surface.nativeElement.getContext('webgl');
        if (gl) {
            this.scene = new AntikytheraScene(gl);
            this.appCanvas.setScene(this.scene, gl);
        }
    }

    onChangeOrtographicProjection(): void {
        this.isOrtographicProjection = !this.isOrtographicProjection;
        this.scene.camera.orthographic = this.isOrtographicProjection;
    }
}
