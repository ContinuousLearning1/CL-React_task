import { Component } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent {
  imageUrl: string = '';

  handleImageUpload(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  
}
