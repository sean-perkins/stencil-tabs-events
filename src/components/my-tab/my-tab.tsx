import { h, Component, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-tab',
})
export class MyTab {
  @Event() tabSelected: EventEmitter<any>;

  render() {
    return (
      <div>
        <button onClick={() => this.tabSelected.emit()}>Click me</button>
      </div>
    );
  }
}
