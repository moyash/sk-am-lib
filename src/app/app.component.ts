import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sk-am-lib-project';

  name = new FormControl('enter the name');

  formG = new FormGroup({
    firstName: new FormControl('first name', Validators.required),
    lastName: new FormControl('last name', Validators.required),
  });

  onPopup() {
    console.log(this.formG.value);
  }

  onSubmit() {
    console.log(this.formG.value);
  }
}
