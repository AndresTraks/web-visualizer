import { Component, ViewChild, OnInit } from "@angular/core";
import { AppCanvasComponent } from "../graphics/app-canvas.component";
import { HarwellScene } from './harwell-scene';
import { Title } from '@angular/platform-browser';
import { AppRenderingContext } from '../graphics/app-rendering-context';

@Component({
    selector: 'harwell-component',
    templateUrl: './harwell.component.html',
    styleUrls: ['./harwell.component.css']
})
export class HarwellComponent implements OnInit {
    scene: HarwellScene;
    @ViewChild(AppCanvasComponent, { static: true }) appCanvas: AppCanvasComponent;

    isOrtographicProjection: boolean = false;

    constructor(titleService: Title) {
        titleService.setTitle("Harwell Dekatron");
    }

    ngOnInit(): void {
        const gl = this.appCanvas.surface.nativeElement.getContext('webgl');
        if (gl) {
            const renderingContext = new AppRenderingContext(gl);
            this.scene = new HarwellScene(renderingContext);
            this.appCanvas.setScene(this.scene);
        }
    }

    onChangeOrtographicProjection(): void {
        this.isOrtographicProjection = !this.isOrtographicProjection;
        this.scene.camera.orthographic = this.isOrtographicProjection;
    }
}
