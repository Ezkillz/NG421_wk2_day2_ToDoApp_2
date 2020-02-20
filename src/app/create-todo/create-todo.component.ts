import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service'
import { Itodo } from '../interfaces/itodo'


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  newTodo: Itodo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo():void {
    this.todoService.addTodo();
  }
}
