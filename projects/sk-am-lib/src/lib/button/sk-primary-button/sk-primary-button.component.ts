import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sk-primary-button',
  template: `
    <button class="bg-lime-400 hover:bg-lime-300 p-2 rounded-lg">
      {{ title }}
    </button>
  `,
  styleUrls: [],
})
export class SkPrimaryButtonComponent {
  @Input() title: string = '';
}
