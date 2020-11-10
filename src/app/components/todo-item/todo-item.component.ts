import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';
import { faCoffee,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  //set Dynamic classess
  setClasses () {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
  //on Delete
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
  //onToggle
  onToggle(todo){
    //TOggle in UI
    todo.completed = !todo.completed;
    //Toggle On Server
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(todo));

  }

}
