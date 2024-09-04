import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo.models';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  @Output() public createTodo = new EventEmitter<Todo>();

  public create(input: HTMLInputElement) {
    this.createTodo.emit({
      description: input.value,
      isCompleted: false,
    });
    input.value = '';
  }
}
