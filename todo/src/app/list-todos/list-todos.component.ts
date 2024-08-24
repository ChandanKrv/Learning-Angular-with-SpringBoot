import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todos = [
    {
      id: 1,
      description: 'Learn Angular',
    },
    {
      id: 2,
      description: 'Learn Typescript',
    },
    {
      id: 3,
      description: 'Visit Safari',
    },
  ];
}
