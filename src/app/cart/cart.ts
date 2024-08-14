import { ProductList } from "../product-list/product-list/product-list";

export interface Cart {
    id?: number;
    // usuario: any;
    producto: ProductList;
    cantidad: number;
    estado?: string;
}
