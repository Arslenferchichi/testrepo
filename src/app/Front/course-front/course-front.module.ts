import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseFrontRoutingModule } from './course-front-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CourseFrontRoutingModule
  ]
})
export class CourseFrontModule { }
