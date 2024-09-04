import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTodo]',
  standalone: true,
})
export class HighlightTodoDirective {
  @Input() public isCompletedTodo: boolean = false;
  @HostBinding('style.border') public get border(): string {
    if (!this.isElementFocused) {
      return '1px solid #ccc';
    }
    return this.isCompletedTodo ? '1px solid red' : '1px solid green'
  }
  @HostListener('mouseenter') public onMouseEnter() {
    this.isElementFocused = true;
  }

  @HostListener('mouseleave') public onMouseLeave() {
    this.isElementFocused = false;
  }

  public isElementFocused: boolean = false;
}
