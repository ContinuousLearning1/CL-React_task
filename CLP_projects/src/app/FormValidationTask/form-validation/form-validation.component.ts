import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  name: string = '';
  email: string = '';
  contactNumber: string = '';
  password: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
