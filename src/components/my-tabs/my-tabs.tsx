import { h, Component, Listen, Host } from '@stencil/core';

let instance = 0;

@Component({
  tag: 'my-tabs',
  styleUrl: 'my-tabs.css',
  shadow: true,
})
export class MyTabs {
  private id = `my-tabs-${instance++}`;

  @Listen('tabSelected')
  tabSelectedHandler(_event: CustomEvent) {
    console.log(`tab selected within my-tabs#${this.id}`);
  }

  render() {
    return (
      <Host id={this.id}>
        <slot></slot>
      </Host>
    );
  }
}
