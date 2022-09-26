import { TreeView, TreeNode } from './node';
interface ITreeItem {
    loadedData?: TreeNode[];
    instance: TreeView;
    handlers: IHandlers;
}
interface ITrees {
    [key: string]: ITreeItem;
}
declare type Handler = (...args: any[]) => any;
interface IHandlers {
    [key: string]: Handler;
}
export declare class TreeHandlers {
    trees: ITrees;
    constructor();
    getIds(): string[];
    safeUpdate(id: string, tree: TreeView): TreeHandlers;
    remove(id: string): TreeHandlers;
    safeUpdateHandler(treeId: string, handlerName: string, handler: Handler): TreeHandlers;
    removeHandler(treeId: string, handlerName: string): TreeHandlers;
    updateLoadedData(id: string, data: TreeNode[]): void;
}
export declare const treeHandlers: TreeHandlers;
export {};
