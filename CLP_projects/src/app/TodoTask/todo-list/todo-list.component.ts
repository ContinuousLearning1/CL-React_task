import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: string[] = [];
  newItem !: string;
  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
