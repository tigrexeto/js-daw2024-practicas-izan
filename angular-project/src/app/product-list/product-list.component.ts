import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title = 'Mi lista de productos';
  headers = { desc: 'Producto', price: 'Precio', avail: 'Disponible', brand: 'Marca', model: 'Modelo' };

  products: IProduct[] = [
    {
    id: 1,
    desc: 'SSD hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5,
    brand: 'marca1',
    model: 'modelo1',
    },
    {
    id: 2,
    desc: 'LGA1151 Motherboard',
    avail: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4,
    brand: 'marca2',
    model: 'modelo2',
    },
    ];
}
