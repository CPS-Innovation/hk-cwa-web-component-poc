import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'cps-key-details',
  styleUrl: 'cps-key-details.css',
  shadow: true,
})
export class CPSKeyDetails {
  @Prop() name: string;
  @State() times: number = 100;

  render() {
    return <div>`this is Key Details ${this.times}page`</div>;
  }
}
