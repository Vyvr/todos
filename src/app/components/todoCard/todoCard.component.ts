import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todoCard.component.html',
  styleUrls: ['./todoCard.component.scss'],
})
export class TodoCardComponent implements OnInit {
  newTitle = '';
  newDescription = '';
  @Input() title = '';
  @Input() description = '';
  @Input() parent = '';
  @Input() editMode = false;
  @Input() previousCategory: string | null;
  @Input() nextCategory: string | null;
  @Output() changeOnSelectedCategoryEmit = new EventEmitter<string>();
  @Output() deleteTitleEmit = new EventEmitter<string>();

  constructor(private evtSvc: EventService){}

  changeCategory(selectedCategory: string) {
     this.evtSvc.emitChangeCategoryEvent({todoName: this.title, targetCategory: selectedCategory })
  }

  editTodo() {
    this.editMode = true;
  }

  deleteTodo() {
    this.deleteTitleEmit.next(this.title);
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
