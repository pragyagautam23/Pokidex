import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarModule } from './progress-bar/progress-bar.module';



@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class SharedModule { }
