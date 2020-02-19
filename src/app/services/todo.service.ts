import { Injectable , OnInit} from '@angular/core';
import { Itodo } from '../interfaces/itodo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Itodo[] = [ 
    {id:1 , title:'Install Angular CLI', description:'' }
  ];
  todoId: number = 0;
 
  constructor() { }

  addTodo(){

  }
  deleteTodo(){

  }
  getTodo(){
    
  }
  
}
