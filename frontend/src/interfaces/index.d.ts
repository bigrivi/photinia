import type { Column } from "@tanstack/react-table";

export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

export interface ITag {
    id: number;
    title: string;
}

export interface ICategory {
    id: number;
    title: string;
}

export interface IPost {
    id: number;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    category: { id: number };
    tags: number[];
}

export interface ColumnButtonProps {
    column: Column<any, any>; // eslint-disable-line
}

export interface FilterElementProps {
    value: any; // eslint-disable-line
    onChange: (value: any) => void; // eslint-disable-line
}

interface ITreeNode {
    id: number;
    children?: ITreeNode[];
    [key: string]: any;
}

interface IDepartment {
    id: number;
    name: string;
    parent_id?: number;
    children?: IDepartment[];
}

interface IRole {
    id: number;
    name: string;
    actions: IAction[];
}

interface IAction {
    id: number;
    name: string;
    resource_id?: number;
    [key: string]: any;
}

interface IResource {
    id: number;
    name: string;
    key: string;
    actions?: IAction[];
    [key: string]: any;
}
