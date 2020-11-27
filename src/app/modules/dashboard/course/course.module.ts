import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ReadCourseComponent } from './read-course/read-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';


@NgModule({
  declarations: [CreateCourseComponent, ReadCourseComponent, EditCourseComponent, DeleteCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
