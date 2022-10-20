import { TodoInterface } from './todo';

export interface CategoryInterface {
  title: string,
  previous: string | null,
  next: string | null,
  todos: TodoInterface[],
}
