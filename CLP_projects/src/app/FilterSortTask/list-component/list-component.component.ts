import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
  productList: any[] = [
    { name: 'Laptop', price: 1099+' $' },
    { name: 'Mobile', price: 199+' $' },
    { name: 'Desktop', price: 799+' $' },
    { name: 'Mouse', price: 14+' $' },
    { name: 'Keyboard', price: 16+' $' },
    { name: 'Headphones', price: 20+' $' }
  ];

  searchKeyword: string = '';

  filteredList: any[] = [];

  constructor() {
    this.filterList();
  }

  filterList(): void {
   
    this.filteredList = this.productList.filter((product) => {
      return product.name.toLowerCase().includes(this.searchKeyword.toLowerCase());
    });
  }

}
