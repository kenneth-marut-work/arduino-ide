export const SketchesServicePath = '/services/sketches-service';
export const SketchesService = Symbol('SketchesService');
export interface SketchesService {
    /**
     * Returns with the direct sketch folders from the location of the `fileStat`.
     * The sketches returns with inverse-chronological order, the first item is the most recent one.
     */
    getSketches(uri?: string): Promise<Sketch[]>
    getSketchFiles(uri: string): Promise<string[]>
    /**
     * Creates a new sketch folder in the `parentUri` location. If `parentUri` is not specified,
     * it falls back to the default `sketchDirUri` from the CLI.
     */
    createNewSketch(parentUri?: string): Promise<Sketch>
    isSketchFolder(uri: string): Promise<boolean>
}

export interface Sketch {
    readonly name: string;
    readonly uri: string
}