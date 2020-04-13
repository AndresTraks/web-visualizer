export class ShaderProgram {
    program: WebGLProgram;
    worldMatrixLocation: WebGLUniformLocation;
    vertColorLocation: WebGLUniformLocation;

    constructor(private gl: WebGLRenderingContext) {
        const vertexShader: WebGLShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        const fragmentShader: WebGLShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    
        var vertexShaderText = 
            `precision mediump float;

            uniform mat4 world_matrix;
            uniform mat4 view_matrix;
            uniform mat4 projection_matrix;

            attribute vec3 position;
            attribute vec3 normal;
            varying vec3 frag_normal;
            varying vec3 world_position;

            void main()
            {
                frag_normal = mat3(world_matrix) * normal;
                world_position = (world_matrix * vec4(position, 1)).xyz;
                gl_Position = projection_matrix * view_matrix * vec4(world_position, 1);
            }`;
        this.gl.shaderSource(vertexShader, vertexShaderText);

        var fragmentShaderText =
            `precision mediump float;

            uniform vec3 eye_position;
            uniform vec3 light_position;
            uniform vec4 vert_color;

            varying vec3 frag_normal;
            varying vec3 world_position;
            void main()
            {
                vec3 light_direction = normalize(light_position - world_position);
                vec3 view_direction = normalize(eye_position - world_position);
                
                vec3 diffuse = (vert_color.xyz * 0.25) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.75);

                gl_FragColor = vec4(diffuse, vert_color.w);
            }`
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
