import { Component, OnInit, Input } from '@angular/core';
import { Itodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { ConfirmationModalComponent, } from '../confirmation-modal/confirmation-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo: Itodo;

  constructor(private todoService:TodoService,private ngbModal: NgbModal) { }

  ngOnInit() { 
  }

  async deleteTodo(){
    //this.modal.open(ConfirmationModalComponent)
  }

}
