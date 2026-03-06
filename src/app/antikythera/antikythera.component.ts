import { Component, ViewChild, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { AntikytheraScene } from "./antikythera-scene";
import { AppCanvasComponent } from "../graphics/app-canvas.component";
import { AppRenderingContext } from '../graphics/app-rendering-context';

@Component({
    selector: 'antikythera-component',
    templateUrl: './antikythera.component.html',
    styleUrls: ['./antikythera.component.css'],
    standalone: false
})
export class AntikytheraComponent implements OnInit {
    scene: AntikytheraScene;
    @ViewChild(AppCanvasComponent, { static: true }) appCanvas: AppCanvasComponent;

    isOrtographicProjection: boolean = false;

    constructor(titleService: Title) {
        titleService.setTitle("Antikythera");
    }

    ngOnInit(): void {
        const gl = this.appCanvas.surface.nativeElement.getContext('webgl');
        if (gl) {
            const renderingContext = new AppRenderingContext(gl);
            this.scene = new AntikytheraScene(renderingContext);
            this.appCanvas.setScene(this.scene);
        }
    }

    onChangeOrtographicProjection(): void {
        this.isOrtographicProjection = !this.isOrtographicProjection;
        this.scene.camera.orthographic = this.isOrtographicProjection;
    }
}
