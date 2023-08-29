import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode = false;
  name = 'Name';
  email = 'email@example.com';
  contact = '1234567890';
  profilePhoto = '';

  handleNameChange(event: any) {
    this.name = event.target.value;
  }

  handleEmailChange(event: any) {
    this.email = event.target.value;
  }

  handleContactChange(event: any) {
    this.contact = event.target.value;
  }

  handleProfilePhotoChange(event: any) {
    this.profilePhoto = event.target.value;
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    this.isEditMode = false;
    // Perform any necessary actions to save the changes (e.g., API call or state management).
  }
}
