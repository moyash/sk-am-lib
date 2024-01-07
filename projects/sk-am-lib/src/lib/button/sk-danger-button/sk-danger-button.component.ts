import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sk-danger-button',
  template: `
    <button class="bg-red-500 hover:bg-red-400 rounded-lg p-2">
      {{ title }}
    </button>
  `,
  styleUrls: [],
})
export class SkDangerButtonComponent {
  @Input() title: string = '';
}
