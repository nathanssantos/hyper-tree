import * as React from 'react';
interface RenderVerticalLine {
    depth: number;
    depthGap: number;
    count: number;
    nodeHeight: number;
    verticalLineOffset?: number;
    verticalLineStyles?: React.CSSProperties;
    verticalLineTopOffset?: number;
    disableTransitions?: boolean;
}
export declare const VerticalLine: ({ depth, depthGap, count, nodeHeight, disableTransitions, verticalLineOffset, verticalLineStyles, verticalLineTopOffset }: RenderVerticalLine) => JSX.Element;
export {};
