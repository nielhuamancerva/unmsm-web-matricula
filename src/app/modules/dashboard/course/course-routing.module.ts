import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ReadCourseComponent } from './read-course/read-course.component';

const routes: Routes = [
  {
    path: '',
    component: ReadCourseComponent,
  },
  {
    path: 'create',
    component: CreateCourseComponent,
  },
  {
    path: 'delete',
    component: DeleteCourseComponent,
  },
  {
    path: 'edit',
    component: EditCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
