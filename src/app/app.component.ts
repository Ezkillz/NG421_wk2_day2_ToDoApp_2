import { Component,OnInit } from '@angular/core';
import { Itodo } from './interfaces/itodo';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoList: Itodo [] = [];
  todoTitle: string;
  todoId: number = 0;
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = 
      // example of how to make an item in todo list
      //{ title: 'Install Angular CLI', isDone: false },
    [{
      id: 1,
      title: 'Install Angular CLI',
      description:' npm install @angular/cli'
    }];
  }
  addTodo():void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: ''
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}
