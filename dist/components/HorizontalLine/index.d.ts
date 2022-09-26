import * as React from 'react';
interface RenderHorizontalLine {
    depth: number;
    depthGap: number;
    verticalLineOffset?: number;
    horizontalLineStyles?: React.CSSProperties;
    gapMode?: 'margin' | 'padding';
}
export declare const HorizontalLine: ({ depth, depthGap, verticalLineOffset, horizontalLineStyles, gapMode }: RenderHorizontalLine) => JSX.Element;
export {};
