import { Component, ElementRef, ViewChild } from '@angular/core';
import { Scene } from '../scene/scene';

@Component({
    selector: 'app-canvas',
    templateUrl: './app-canvas.component.html'
})
export class AppCanvasComponent {
    @ViewChild('surface', { static: true }) surface: ElementRef;

    private scene: Scene;
    gl: WebGLRenderingContext;
    glNotSupported: boolean;

    setScene(scene: Scene) {
        if (!scene.renderingContext) {
            this.glNotSupported = true;
        }

        this.gl = scene.renderingContext.gl;
        this.scene = scene;
        this.scene.camera.aspect = this.surface.nativeElement.width / this.surface.nativeElement.height;

        requestAnimationFrame(this.render.bind(this));
    }

    private render(timestamp: DOMHighResTimeStamp): void {
        const seconds = timestamp.valueOf() / 1000;

        const color = this.scene.clearColor;
        this.gl.clearColor(color[0], color[1], color[2], color[3]);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.scene.draw(seconds);
        this.gl.useProgram(null);

        requestAnimationFrame(this.render.bind(this));
    }
}
