import { Component, Output } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ICard } from './model/card';
import { ITodo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  cardTitles = ['To do', 'In progress', 'Done'];
  cards: ICard[] = [];
  todosArr: ITodo[] = [
    {
      title: 'do homework',
      description: "Hey oi need to do my homework!",
      parent: 'To do',
    },
    {
      title: 'Take a dog for a walk',
      parent: 'To do',
      description: "",
    },
    {
      title: 'Make dinner',
      parent: 'Done',
      description: "",
    },
    {
      title: 'shit yourself',
      parent: 'In progress',
      description: "Oh no i've just shit myself :C",
    },
  ];

  constructor() {
    for (const tit of this.cardTitles) {
      this.cards.push({ title: tit });
    }
  }

  moveTodoLeft() {
    
  }
}
