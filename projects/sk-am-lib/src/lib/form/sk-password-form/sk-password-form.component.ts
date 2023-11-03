import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-sk-password-form',
  template: `
    <div>
      <div class="flex items-center justify-between">
        <label class="block text-sm font-medium leading-6 text-gray-900"
          >Password</label
        >
      </div>
      <div class="mt-2">
        <input
          type="password"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          [formControl]="password"
        />
      </div>
    </div>
  `,
  styleUrls: [],
})
export class SkPasswordFormComponent {
  password = new FormControl('enter your passowrd');
}
