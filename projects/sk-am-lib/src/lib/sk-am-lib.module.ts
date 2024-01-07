import { NgModule } from '@angular/core';
import { SkAmLibComponent } from './sk-am-lib.component';
import { SkPrimaryButtonComponent } from './button/sk-primary-button/sk-primary-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkLoginEmailComponent } from './login/sk-login-email/sk-login-email.component';
import { SkEmailFormComponent } from './form/sk-email-form/sk-email-form.component';
import { SkPasswordFormComponent } from './form/sk-password-form/sk-password-form.component';
import { SkDangerButtonComponent } from './button/sk-danger-button/sk-danger-button.component';

@NgModule({
  declarations: [
    SkAmLibComponent,
    SkPrimaryButtonComponent,
    SkLoginEmailComponent,
    SkEmailFormComponent,
    SkPasswordFormComponent,
    SkDangerButtonComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [
    SkAmLibComponent,
    SkPrimaryButtonComponent,
    SkDangerButtonComponent,
    SkLoginEmailComponent,
    SkEmailFormComponent,
    SkPasswordFormComponent,
  ],
})
export class SkAmLibModule {}
