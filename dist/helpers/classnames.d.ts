export declare type IClassNamesObjectProps = {
    [key: string]: boolean;
};
export declare type IClassNamesProps = string | undefined;
export declare const convertObjectToString: (classes: {
    [key: string]: boolean;
}) => string;
export declare const classnames: (...classes: (IClassNamesObjectProps | IClassNamesProps)[]) => string;
