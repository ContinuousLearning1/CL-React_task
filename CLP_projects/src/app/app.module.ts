import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule } from '@angular/forms';

import { DataBindingComponent } from './DataBindingTask/data-binding/data-binding.component';
import { CurrentTimeComponent } from './AutoTimeTask/current-time/current-time.component';
import { ListComponentComponent } from './FilterSortTask/list-component/list-component.component';
import { TodoListComponent } from './TodoTask/todo-list/todo-list.component';
import { FormValidationComponent } from './FormValidationTask/form-validation/form-validation.component';
import { ImageuploadComponent } from './ImageUploadTask/imageupload/imageupload.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './ServiceTask/user-list/user-list.component';
import { WebsiteComponent } from './WebProject/website/website.component';
import { ProfileComponent } from './Profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,

    DataBindingComponent,
     CurrentTimeComponent,
     ListComponentComponent,
     TodoListComponent,
     FormValidationComponent,
     ImageuploadComponent,
     UserListComponent,
     WebsiteComponent,
     ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
