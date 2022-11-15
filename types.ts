import type * as css from "csstype";

interface Vector2<T> {
    x: T;
    y: T;
}

interface Vector3<T> {
    x: T;
    y: T;
    z: T;
}

interface Style extends css.Properties {}

interface Transform {
    position?: Vector3<string>;
    rotation?: string;
    scale?: Vector2<string>;
}

interface Animation {
    [key: string]: {
        transform: Transform;
        style: Style;
    }
}

interface Moss {
    query: string;
    transform?: Transform;
    style?: Style;
    animation?: {
        duration: number;
        frames: Animation;
    }
    submoss?: Moss[];
}
