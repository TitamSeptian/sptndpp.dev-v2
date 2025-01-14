import { Layout } from 'react-grid-layout';
export const lgLayout: Layout[] = [
    { i: 'images-1', x: 0, y: 0, w: 1, h: 2 }, // Column 1
    { i: 'images-2', x: 1, y: 0, w: 1, h: 2 }, // Column 2
    { i: 'images-3', x: 0, y: 2, w: 1, h: 1.5 }, // Column 1
    { i: 'images-4', x: 1, y: 2, w: 1, h: 1.5 }, // Column 2
    { i: 'images-5', x: 0, y: 3.5, w: 1, h: 2 }, // Column 1
    { i: 'images-6', x: 1, y: 3.5, w: 1, h: 2 }, // Column 2
    { i: 'images-7', x: 0, y: 5.5, w: 1, h: 1.5 }, // Column 1
    { i: 'images-8', x: 1, y: 5.5, w: 1, h: 1.5 }, // Column 2
    { i: 'images-9', x: 0, y: 7, w: 1, h: 2 }, // Column 1
    { i: 'images-10', x: 1, y: 7, w: 1, h: 2 }, // Column 2
];


export const smLayout: Layout[] = [
    { i: 'images-1', x: 0, y: 0, w: 2, h: 3 },
    { i: 'images-2', x: 1, y: 0, w: 1, h: 2 },
    { i: 'images-3', x: 0, y: 2, w: 1, h: 1.5 },
    { i: 'images-4', x: 1, y: 2, w: 1, h: 1.5 },
    { i: 'images-5', x: 0, y: 3.5, w: 1, h: 2 },
    { i: 'images-6', x: 1, y: 3.5, w: 1, h: 2 },
    { i: 'images-7', x: 0, y: 5.5, w: 1, h: 1.5 },
    { i: 'images-8', x: 1, y: 5.5, w: 1, h: 1.5 },
    { i: 'images-9', x: 0, y: 7, w: 1, h: 2 },
    { i: 'images-10', x: 1, y: 7, w: 1, h: 2 },
];



/*
To achieve a 16:9 aspect ratio:
- If width (w) is 1, then height (h) should be approximately 0.5625 (9/16).
- If width (w) is 2, then height (h) should be approximately 1.125 (18/16 or 9/8), but we simplify to 1 for layout purposes.
*/
