import { ShaderProgram } from './shader-program';

export class AppRenderingContext {
    gl: WebGLRenderingContext;
    standardShader: ShaderProgram;
    emitterShader: ShaderProgram;

    constructor (gl: WebGLRenderingContext) {
        this.gl = gl;

        this.standardShader = new ShaderProgram(this.standardVertexShaderText, this.standardFragmentShaderText, this.gl);
        this.standardShader.use();
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.BACK);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        this.emitterShader = new ShaderProgram(this.standardVertexShaderText, this.emitterFragmentShaderText, this.gl);
        this.emitterShader.use();
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.BACK);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }

    get standardVertexShaderText(): string {
        return `
        precision mediump float;

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
    }

    get standardFragmentShaderText(): string {
        return `
        precision mediump float;

        uniform vec3 light_position;
        uniform vec4 vert_color;

        varying vec3 frag_normal;
        varying vec3 world_position;
        void main()
        {
            vec3 light_direction = normalize(light_position - world_position);
            
            vec3 diffuse = (vert_color.xyz * 0.25) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.75);

            gl_FragColor = vec4(diffuse, vert_color.w);
        }`
    }

    get emitterFragmentShaderText(): string {
        return `
        precision mediump float;

        uniform vec3 light_position;
        uniform vec4 vert_color;

        varying vec3 frag_normal;
        varying vec3 world_position;
        void main()
        {
            vec3 light_direction = normalize(light_position - world_position);
            
            vec3 diffuse = (vert_color.xyz * 0.75) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.25);

            gl_FragColor = vec4(diffuse, vert_color.w);
        }`
    }
}
