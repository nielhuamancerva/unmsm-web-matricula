import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEnrollmentComponent } from './create-enrollment/create-enrollment.component';
import { DeleteEnrollmentComponent } from './delete-enrollment/delete-enrollment.component';
import { EditEnrollmentComponent } from './edit-enrollment/edit-enrollment.component';
import { ReadEnrollmentComponent } from './read-enrollment/read-enrollment.component';

const routes: Routes = [
  {
    path: '',
    component: ReadEnrollmentComponent,
  },
  {
    path: 'create',
    component: CreateEnrollmentComponent,
  },
  {
    path: 'delete',
    component: DeleteEnrollmentComponent,
  },
  {
    path: 'edit',
    component: EditEnrollmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule { }
