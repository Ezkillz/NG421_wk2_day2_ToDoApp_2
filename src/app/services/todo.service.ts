import { Injectable , OnInit} from '@angular/core';
import { Itodo } from '../interfaces/itodo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Itodo[] = [ 
    {id:1 , title:'Install Angular CLI', description:'' }
  ];
  todoTitle: string;
  todoId: number = 0;
 
  constructor() { }

  addTodo() :void{
    this.todoList.push({
      id: this.todoId++,
      title:'',
      description:''
    });
  }
  deleteTodo(todo: any){
    // kept getting an error with todoItem
    // const index = this.todoList.findIdex(this.todoItem => todoItem === todo);
    // this.todoList.splice(index, 1);
  }

  getTodos(){
    return this.todoList;
  }
  
}
