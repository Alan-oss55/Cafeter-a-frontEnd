import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/product-category/product-category';
import { ProductsService } from 'src/app/products/products.service';
import { ProductList } from './product-list';
import { CartService } from 'src/app/cart/cart.service';
import { MessageService } from 'primeng/api';
import { Cart } from 'src/app/cart/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  carts: Cart[] = [];
  menuItems: ProductCategory[] = [];
  selectedIndex: number = 0;
  products: ProductList[] = [];
  productFiltered: ProductList[] = [];
  cantidades: { [productId: number]: number } = {};
  viewCarrito: boolean = false;
  selectedProducts: {id: number; productId: ProductList, cantidad: number }[] = [];
  montoTotal: number = 0;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCategorys();
    this.getAllCarts();
  }

  onSelect(index: number): void {
    this.selectedIndex = index;
    this.filterProduct();
  }

  getCategorys(): void {
    this.productService.getAllCategoria().subscribe(
      (res) => {
        this.menuItems = res;
        this.getProducts();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
        this.filterProduct();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterProduct(): void {
    const filterProduct = this.menuItems[this.selectedIndex]?.id;
    if (filterProduct) {
      this.productFiltered = this.products.filter(product => product.categoriaId.id === filterProduct);
    }
  }

  addToCart(product: ProductList): void {
    const cantidad = Math.max(this.cantidades[product.id] || 1, 1);
    const existingProduct = this.selectedProducts.find(p => p.productId.id === product.id);

    if (existingProduct) {
        existingProduct.cantidad += cantidad;
    } else {
        this.selectedProducts.push({ id: product.id, productId: product, cantidad: cantidad });
    }

    this.montoTotal += product.precio * cantidad;
    this.cantidades[product.id] = 1; 
    this.showSuccess('Producto agregado al carrito');
}




  getAllCarts(): void {
    this.cartService.getAllCart().subscribe(
      (res) => {
        this.carts = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showSuccess(detail: string): void {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: detail });
  }

  pay(): void {
    const cartItems = this.selectedProducts.map(item => ({
        productoId: item.productId.id, 
        cantidad: item.cantidad
    }));

    console.log({ items: cartItems });
    this.cartService.addMultipleCartItems(cartItems).subscribe(
        (res) => {
            this.showSuccess('Productos agregados al carrito');
            console.log(res);
        },
        (error) => {
            console.error(error);
        }
    );

    this.selectedProducts = [];
    this.montoTotal = 0;
    this.viewCarrito = false;
}



discard(): void {
  this.selectedProducts = [];
  this.montoTotal = 0;
  this.viewCarrito = false;
  this.messageService.add({ severity: 'info', summary: 'Orden descartada', detail: 'La orden ha sido descartada' });
  }

  getProductName(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.nombre : 'Producto desconocido';
}

}
