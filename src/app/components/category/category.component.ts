import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from 'src/app/model/todo';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CategoryInterface } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  todoTitle = '';
  todoDescription = '';
  editTodoMode = false;
  @Input() title = '';
  @Input() todos: TodoInterface[] = [];
  @Input() category: CategoryInterface;

  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        name: this.todoTitle,
        description: this.todoDescription,
        title: 'Create new todo!',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.addNewTodo(result.name, result.description);
      }
    });
  }
  addNewTodo(name: string, description: string) {
    this.category.todos.push({
      title: name,
      parent: this.title,
      description: description,
    });
  }

  deleteTodo(tit: string) {
    const newChildren = this.category.todos.filter((c) => c.title !== tit);
    this.category.todos = newChildren;
  }

  changeTodoCategory(targetCategory: string) {
    console.log(targetCategory);
  }
}
