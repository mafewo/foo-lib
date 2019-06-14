import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [FooLibComponent, ButtonComponent],
  imports: [
  ],
  exports: [FooLibComponent, ButtonComponent]
})
export class FooLibModule { }
