export class ShaderProgram {
    program: WebGLProgram;
    worldMatrixLocation: WebGLUniformLocation;
    vertColorLocation: WebGLUniformLocation;

    constructor(vertexShaderText: string, fragmentShaderText: string, private gl: WebGLRenderingContext) {
        const vertexShader: WebGLShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        const fragmentShader: WebGLShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    
        this.gl.shaderSource(vertexShader, vertexShaderText);
        this.gl.shaderSource(fragmentShader, fragmentShaderText);
    
        this.gl.compileShader(vertexShader);
        if (!this.gl.getShaderParameter(vertexShader, this.gl.COMPILE_STATUS)) {
            console.error('ERROR compiling vertex shader!', this.gl.getShaderInfoLog(vertexShader));
            return;
        }
    
        this.gl.compileShader(fragmentShader);
        if (!this.gl.getShaderParameter(fragmentShader, this.gl.COMPILE_STATUS)) {
            console.error('ERROR compiling fragment shader!', this.gl.getShaderInfoLog(fragmentShader));
            return;
        }
    
        this.program = this.gl.createProgram();

        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            console.error('ERROR linking program!', this.gl.getProgramInfoLog(this.program));
            return;
        }
        this.gl.validateProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.VALIDATE_STATUS)) {
            console.error('ERROR validating program!', this.gl.getProgramInfoLog(this.program));
            return;
        }

        this.worldMatrixLocation = this.getUniformLocation('world_matrix');
        this.vertColorLocation = this.getUniformLocation('vert_color');
    }

    use(): void {
        this.gl.useProgram(this.program);
    }

    getAttribLocation(name: string): GLint {
        return this.gl.getAttribLocation(this.program, name);
    }

    getUniformLocation(name: string): WebGLUniformLocation {
        return this.gl.getUniformLocation(this.program, name);
    }
}
