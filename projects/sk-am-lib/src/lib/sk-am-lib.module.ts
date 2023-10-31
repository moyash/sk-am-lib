import { NgModule } from '@angular/core';
import { SkAmLibComponent } from './sk-am-lib.component';
import { SkPrimaryButtonComponent } from './button/sk-primary-button/sk-primary-button.component';

@NgModule({
  declarations: [SkAmLibComponent, SkPrimaryButtonComponent],
  imports: [],
  exports: [SkAmLibComponent, SkPrimaryButtonComponent],
})
export class SkAmLibModule {}
