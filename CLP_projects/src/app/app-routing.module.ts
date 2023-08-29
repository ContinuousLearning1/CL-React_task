import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './DataBindingTask/data-binding/data-binding.component';
import { CurrentTimeComponent } from './AutoTimeTask/current-time/current-time.component';
import { ListComponentComponent } from './FilterSortTask/list-component/list-component.component';
import { TodoListComponent } from './TodoTask/todo-list/todo-list.component';
import { FormValidationComponent } from './FormValidationTask/form-validation/form-validation.component';
import { ImageuploadComponent } from './ImageUploadTask/imageupload/imageupload.component';
import { UserListComponent } from './ServiceTask/user-list/user-list.component';

import { ProfileComponent } from './Profile/profile/profile.component';



const routes: Routes = [
  { path: 'databinding', component:DataBindingComponent },
  {path:'currentTime',component:CurrentTimeComponent},
  {path:'filters',component:ListComponentComponent},
  {path:'todolist',component:TodoListComponent},
  {path:'formvalidation',component:FormValidationComponent},
  {path:'image',component:ImageuploadComponent},
  {path:'userservice',component:UserListComponent},
  {path:'profile',component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
