import { IItem } from "./item";

export interface IList {
    title: string;
    items: IItem[];
    createdAt: Date;
    author: any;
}
