import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-sk-email-form',
  template: `
    <div>
      <label class="block text-sm font-medium leading-6 text-gray-900"
        >Email Address</label
      >
      <div class="mt-2">
        <input
          type="email"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          [formControl]="email"
        />
      </div>
    </div>
  `,
  styleUrls: [],
})
export class SkEmailFormComponent {
  email = new FormControl('test');
}
