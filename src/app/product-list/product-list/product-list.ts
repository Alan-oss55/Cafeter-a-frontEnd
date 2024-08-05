import { ProductCategory } from "src/app/product-category/product-category";

export interface ProductList {
    id: number;
    nombre: string;
    descripcion: string;
    categoriaId: ProductCategory;
    imagen: string;
    precio: number;
    disponibilidad: boolean;
}
