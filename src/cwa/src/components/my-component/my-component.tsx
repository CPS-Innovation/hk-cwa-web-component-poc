import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() colorFn?: (a: string) => void;

  private handleClick() {
    if (this.colorFn) {
      this.colorFn('red');
    }
  }

  private getText(): string {
    return format(`I am a ${this.first}.js component - getText() I am an inner function`);
  }

  render() {
    return (
      <div class={'container'}>
        <button onClick={() => this.handleClick()}>button</button>
        <p>{this.getText()}</p>
      </div>
    );
  }
}
