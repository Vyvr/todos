import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/model/todo';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() children: ITodo[] = [];
  @Input() todos: ITodo[] = [];
  @Output() moveLeftEmit = new EventEmitter<string>();
  @Output() moveRightEmit = new EventEmitter<string>();
  todoTitle = '';
  todoDescription = '';
  editTodoMode = false;

  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { name: this.todoTitle, description: this.todoDescription },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.addNewTodo(result.name, result.description);
      }
    });
  }

  ngOnInit(): void {
    const todos = this.children.filter((c) => c.parent === this.title);
    this.children = todos;
  }

  addNewTodo(name: string, description: string) {
    this.children.push({
      title: name,
      parent: this.title,
      description: description,
    });
  }

  deleteTodo(tit: string) {
    const newChildren = this.children.filter((c) => c.title !== tit)
    this.children = newChildren;
  }

  moveTodoLeft() {
    this.moveLeftEmit.next('left')
  }

  moveTodoRight() {

  }
  
}
