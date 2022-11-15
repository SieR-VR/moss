import css from 'css';
import { writeFileSync } from 'fs';

interface Vector2<T> {
    x: T;
    y: T;
}

interface Angle {
    angle: number;
}

interface Moss {
    position?: Vector2<number>;
    z?: number;

    scale?: Vector2<string>;
    rotation?: Angle;

    query: string;
}

const moss: Moss = {
    position: { x: 200, y: 300 },
    z: 0,
    scale: { x: "30px", y: "30px" },
    rotation: { angle: 0 },
    query: "#root"
};

function render(moss: Moss) {
    console.log(moss);

    const stylesheet: css.Stylesheet = {
        type: "stylesheet",
        stylesheet: {
            rules: [
                {
                    type: "rule",
                    selectors: [moss.query],
                    declarations: [
                        {
                            type: "declaration",
                            property: "position",
                            value: "absolute"
                        },
                        {
                            type: "declaration",
                            property: "left",
                            value: moss.position?.x + "px"
                        },
                        {
                            type: "declaration",
                            property: "top",
                            value: moss.position?.y + "px"
                        },
                        {
                            type: "declaration",
                            property: "z-index",
                            value: moss.z?.toString()
                        },
                        {
                            type: "declaration",
                            property: "width",
                            value: moss.scale?.x
                        },
                        {
                            type: "declaration",
                            property: "height",
                            value: moss.scale?.y
                        }
                    ]
                }
            ]
        }
    }

    const result = css.stringify(stylesheet);
    console.log(result);
    
    writeFileSync("test.css", result);
}

render(moss);