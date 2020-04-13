import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShaderProgram } from './shader-program';
import { Scene } from '../scene/scene';

@Component({
    selector: 'app-canvas',
    templateUrl: './app-canvas.component.html'
})
export class AppCanvasComponent {
    @ViewChild('surface', { static: true }) surface: ElementRef;

    private scene: Scene;
    gl: WebGLRenderingContext;
    program: ShaderProgram;
    glNotSupported: boolean;

    setScene(scene: Scene, gl: WebGLRenderingContext) {
        if (!gl) {
            this.glNotSupported = true;
        }

        this.gl = gl;
        this.scene = scene;
        this.scene.camera.aspect = this.surface.nativeElement.width / this.surface.nativeElement.height;

        this.program = new ShaderProgram(this.gl);
        this.program.use();
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.BACK);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        requestAnimationFrame(this.render.bind(this));
    }

    private render(timestamp: DOMHighResTimeStamp): void {
        const seconds = timestamp.valueOf() / 1000;

        this.gl.clearColor(0.5, 0.85, 0.8, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.program.use();
        this.scene.draw(this.program, seconds);
        this.gl.useProgram(null);

        requestAnimationFrame(this.render.bind(this));
    }
}
