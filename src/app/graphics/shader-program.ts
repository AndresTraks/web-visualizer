export class ShaderProgram {
    program: WebGLProgram;
    worldMatrixLocation: WebGLUniformLocation;
    vertColorLocation: WebGLUniformLocation;

    constructor(vertexShaderText: string, fragmentShaderText: string, private gl: WebGLRenderingContext) {
        const vertexShader: WebGLShader = this.createShader(this.gl.VERTEX_SHADER);
        const fragmentShader: WebGLShader = this.createShader(this.gl.FRAGMENT_SHADER);
    
        this.gl.shaderSource(vertexShader, vertexShaderText);
        this.gl.shaderSource(fragmentShader, fragmentShaderText);
    
        this.gl.compileShader(vertexShader);
        if (!this.gl.getShaderParameter(vertexShader, this.gl.COMPILE_STATUS)) {
            throw Error('ERROR compiling vertex shader!\n' + this.gl.getShaderInfoLog(vertexShader));
        }
    
        this.gl.compileShader(fragmentShader);
        if (!this.gl.getShaderParameter(fragmentShader, this.gl.COMPILE_STATUS)) {
            throw Error('ERROR compiling fragment shader!\n' + this.gl.getShaderInfoLog(fragmentShader));
        }
    
        this.program = this.createProgram();

        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            throw Error('ERROR linking program!\n' + this.gl.getProgramInfoLog(this.program));
        }
        this.gl.validateProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.VALIDATE_STATUS)) {
            throw Error('ERROR validating program!\n' + this.gl.getProgramInfoLog(this.program));
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
        const location = this.gl.getUniformLocation(this.program, name);
        if (!location) {
            throw Error('ERROR getting uniform location of ' + name);
        }
        return location;
    }

    private createShader(shaderType: GLenum): WebGLShader {
        const shader = this.gl.createShader(shaderType);
        if (!shader) {
            throw Error('ERROR creating shader!');
        }
        return shader;
    }

    private createProgram(): WebGLProgram {
        const program = this.gl.createProgram();
        if (!program) {
            throw Error('ERROR creating program!');
        }
        return program;
    }
}
