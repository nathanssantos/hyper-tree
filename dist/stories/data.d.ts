export declare const smallData: {
    id: number;
    name: string;
    children: ({
        id: number;
        name: string;
        getChildren: () => Promise<unknown>;
    } | {
        id: number;
        name: string;
        getChildren: () => {
            id: number;
            name: string;
        }[];
    })[];
};
