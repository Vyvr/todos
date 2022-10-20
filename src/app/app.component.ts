import { Component } from '@angular/core';
import { CategoryInterface } from './model/category';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  categories: CategoryInterface[] = [
    {
      title: 'To do',
      previous: null,
      next: 'In progress',
      todos: [
        {
          title: 'do homework',
          description: 'Hey oi need to do my homework!',
          parent: 'To do',
        },
        {
          title: 'Take a dog for a walk',
          description: '',
          parent: 'To do',
        },
      ],
    },
    {
      title: 'In progress',
      previous: 'To do',
      next: 'Done',
      todos: [
        {
          title: 'shit yourself',
          description: "Oh no i've just shit myself :C",
        },
      ],
    },
    {
      title: 'Done',
      previous: 'In progress',
      next: null,
      todos: [
        {
          title: 'Make dinner',
          description: '',
        },
      ],
    },
  ];
  title = 'todos';

  constructor(private evtSvc: EventService) {}

  ngOnInit() {
    this.evtSvc.changeCategoryEventListner().subscribe((msg) => {
      console.log(msg);
    });
  }

  moveTodoLeft() {}
}
