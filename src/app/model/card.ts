import { ITodo } from './todo';

export interface ICard {
  title: string;
  children?: ITodo[];
}
