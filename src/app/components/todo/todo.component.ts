import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() parent = '';
  @Input() editMode = false;
  @Output() deleteTitleEmit = new EventEmitter<string>();
  @Output() moveTodoLeftEmit = new EventEmitter<string>();
  @Output() moveTodoRightEmit = new EventEmitter<string>();


  newTitle = '';
  newDescription = '';

  constructor() {}

  editTodo() {
    this.editMode = true;
  }

  deleteTodo() {
    this.deleteTitleEmit.next(this.title);
  }

  moveRight() {
    this.moveTodoRightEmit.next('right')
  }
  moveLeft() {
    this.moveTodoLeftEmit.next('left')
  }

  ngOnInit(): void {
    this.newTitle = this.title;
    this.newDescription = this.description;
  }

  setNewTitle(tit: string) {
    this.newTitle = tit;
  }

  setNewDescription(desc: string) {
    this.newDescription = desc;
  }

  changeTodo() {
    this.title = this.newTitle;
    this.description = this.newDescription;
    this.editMode = false;
  }

  cancelChange() {
    this.editMode = false;
  }
}
