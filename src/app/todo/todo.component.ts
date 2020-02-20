import { Component, OnInit, Input } from '@angular/core';
import { Itodo } from '../interfaces/itodo'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Itodo;

  constructor(private todoService:TodoService) { }

  ngOnInit() { 
  }

  delete(){
    
  }

}
