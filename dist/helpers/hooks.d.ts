import { TreeView, IFilter, ISort, TreeNode, InsertChildType, InsertSiblingType, IData } from './node';
export interface IUseTreeState {
    id: string;
    data: any;
    filter?: IFilter;
    sort?: ISort;
    defaultOpened?: boolean | (number | string)[];
    multipleSelect?: boolean;
    refreshAsyncNodes?: boolean;
    idKey?: string;
    childrenKey?: string;
}
export declare type IDropType = 'before' | 'children' | 'after';
export declare const useTreeState: ({ id, data, filter, sort, defaultOpened, multipleSelect, refreshAsyncNodes, idKey, childrenKey }: IUseTreeState) => {
    instance: TreeView;
    handlers: {
        setChildren: (parent: TreeNode | string | number, children: TreeNode[], type?: InsertChildType, reset?: boolean) => void;
        setLoading: (node: TreeNode | string | number, loading?: boolean) => void;
        setOpen: (node: TreeNode | string | number, toggle?: any) => Promise<void>;
        setRawChildren: (parent: TreeNode | string | number, children: IData[], type?: InsertChildType, reset?: boolean) => void;
        setSelected: (node: TreeNode | string | number, selected?: boolean) => void;
        setSiblings: (node: TreeNode | string | number, siblings: TreeNode[], type: InsertSiblingType) => void;
        setNodeData: (node: TreeNode | string | number, dataToSet: IData) => void;
        getNode: (node: TreeNode | string | number) => TreeNode | null;
        getNodeData: (node: TreeNode | string | number) => IData | undefined;
        selectAll: () => void;
        unselectAll: () => void;
        draggableHandlers: {
            handleDragStart: (e: React.DragEvent) => void;
            handleDragEnter: (node: TreeNode, type: string | boolean) => (e: React.DragEvent) => void;
            handleDragLeave: (node: TreeNode) => (e: React.DragEvent) => void;
            handleDrop: (sourceNode: TreeNode) => (e: React.DragEvent) => void;
        };
    };
    required: {
        isDragging: boolean;
        data: TreeNode[];
    };
};
