import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReadUserComponent } from './read-user/read-user.component';

const routes: Routes = [
  {
    path: '',
    component: ReadUserComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
  },
  {
    path: 'delete',
    component: DeleteUserComponent,
  },
  {
    path: 'edit',
    component: EditUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
