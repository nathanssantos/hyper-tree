import { ClassesType } from '../types';
import { TreeNode } from './node';
export declare const defaultProps: {
    childrenKey: string;
    classes: ClassesType;
    depthGap: number;
    displayedName: (node: TreeNode) => any;
    filter: () => boolean;
    gapMode: "margin";
    horizontalLineStyles: {
        stroke: string;
        strokeWidth: number;
        strokeDasharray: string;
    };
    idKey: string;
    opened: never[];
    verticalLineOffset: number;
    verticalLineStyles: {
        stroke: string;
        strokeWidth: number;
        strokeDasharray: string;
    };
    verticalLineTopOffset: number;
};
