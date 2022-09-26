export interface IDataOptions {
    async: boolean;
    childrenCount: number;
    childrenKey: string;
    currentChilrenCount: number;
    hasChildren: boolean;
    idKey: string;
    leaf: boolean;
    loading: boolean;
    opened: boolean;
    parent?: TreeNode;
    path: string;
    root: boolean;
    selected: boolean;
    dropContainer: string | boolean;
    reactKey: string;
}
export interface IData {
    [key: string]: any;
}
export interface ITreeNode {
    readonly id: number | string;
    data: IData;
    options: IDataOptions;
    children?: TreeNode[];
}
export declare type IFilter = (node: TreeNode) => boolean;
export declare type ISort = (node: TreeNode, siblingNode: TreeNode) => -1 | 0 | 1;
export interface Options {
    filter?: IFilter;
    sort: ISort;
    defaultOpened?: boolean | number[];
    enhance?: boolean;
    idKey: string;
    childrenKey: string;
}
export declare type InsertChildType = 'first' | 'last';
export declare type InsertSiblingType = 'before' | 'after';
export declare type RemoveType = 'start' | 'end';
export declare class TreeNode implements ITreeNode {
    readonly id: number | string;
    data: IData;
    options: IDataOptions;
    children?: TreeNode[];
    asyncNode: boolean;
    asyncDataLoaded: boolean;
    constructor(data: IData, options: IDataOptions, children?: TreeNode[]);
    getData(): IData;
    setData(data: IData): void;
    getChildren(): TreeNode[];
    setNodeChildren(children: TreeNode[], type?: InsertChildType, reset?: boolean): TreeNode[];
    removeChild(node: TreeNode): void;
    setChildren(children: TreeNode[]): void;
    hasChildren(): boolean | undefined;
    getParent(): TreeNode | undefined;
    setParent(parent?: TreeNode): void;
    setNodesParent(nodes: TreeNode[], parent?: TreeNode): TreeNode[];
    setChildrenCount(count: number): void;
    getFirstChild(): TreeNode;
    getLastChild(): TreeNode | null;
    setOpened(opened?: boolean): void;
    isOpened(): boolean;
    setLoading(loading?: boolean): void;
    isLoading(): boolean;
    setSelected(selected?: boolean): void;
    isSelected(): boolean;
    setPath(parentPath: string): void;
    getPath(array?: boolean): string | string[];
    setNodeDropContainer(dropContainer?: string | boolean): void;
    getNodeDropContainer(): string | boolean;
    getReactKey(): string;
    setAsyncDataLoaded(asyncDataLoaded: boolean): void;
    isAsyncDataLoaded(): boolean;
}
export declare class TreeView {
    hash: string;
    id: string;
    data: any[];
    options: Options;
    enhancedData: TreeNode[];
    flatData: Array<TreeNode | any>;
    ids: number[];
    static instance: TreeView;
    constructor(id: string, data: any, options: Options);
    on(callback: () => void): void;
    sort(tree: any[]): any[];
    staticEnhance(data: any[], node?: TreeNode | string | number): TreeNode[];
    enhance(data?: any[]): TreeNode[];
    enhanceNodes(shallow?: boolean): void;
    flat(raw?: boolean): TreeNode[];
    selectAll(): void;
    unselectAll(): void;
    getOpenedNodes(): TreeNode[];
    addChildren(parentId: number | string, data: IData[], insertType?: InsertChildType): void;
    addSibling(nodeId: number | string, data: IData, insertType?: InsertSiblingType): void;
    remove(nodeId: number | string, leaveChildren?: RemoveType): void;
    traverseRaw(callback: (node: any, childIndex: number, depth: number) => void, deep?: boolean): void;
    traverse(callback: (node: TreeNode, childIndex: number, depth: number) => void, deep?: boolean): void;
    getNodeById(id: number | string): TreeNode;
    private _addChildren;
    private _addSibling;
    private _flat;
    private _enhance;
    private _staticEnhance;
    private _staticShallowEnahance;
    private _calculateChildrenCount;
    private _remove;
    private _getNodeById;
    private _traverseDeep;
    private _traverseBreadth;
}
