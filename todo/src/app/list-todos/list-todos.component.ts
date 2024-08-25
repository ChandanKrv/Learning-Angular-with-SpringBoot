import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate:Date,
  ) {


  }
}


@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todos = [
  new Todo(1,'Learn Angular',false,new Date()),
  new Todo(2,'Learn Typescript',false,new Date()),
  new Todo(3,'Learn Springboot',false,new Date()),
  new Todo(4,'Visit Singapore',false,new Date()),
  ];
}
