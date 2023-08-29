import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {




  userDetails:any[]=[];
  data:any[]=[];
  constructor(private service:DataService,private sanitizer: DomSanitizer){
  //  service=inject(DataService);
   
  }
  ngOnInit() {
    this. getUserDetails();
    this.getdata();
  }

  getdata(){
    this.service.getDetails().subscribe(details=>{
      this.data=details;
    })
  }

  getUserDetails(){
    this.service.getData().subscribe(data=>{
      this.userDetails=data;
    })
  }
  private extractYouTubeVideoId(url: string): string {
    // Extract the video ID from the YouTube URL
    const videoIdRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(videoIdRegex);
    const videoId = match && match[1] ? match[1] : '';
    console.log('URL:', url);
    console.log('Video ID:', videoId);
    return videoId;
  }
  convertProfileImageUrls() {
    this.data.forEach((item) => {
      item.profileVideoId = this.extractYouTubeVideoId(item.profileImage);
    });
  }
  getEmbeddedVideoUrl(videoId: string): SafeResourceUrl {
    const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }


  // method(){
  //   this.service.getexceldata().subscribe(data=>{

  //   })
  // }

  // onDownloadClick(): void {
  //   this.service.getexceldata().subscribe(data => {
  //     const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = 'users.xlsx';
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   });
  // }
  // searchKeyword: string = '';

  // filteredList: any[] = [];

  // // constructor() {
  // //   
  // // }
  
  // filterList(): void {
  //   this. userDetails = this. userDetails.filter((data) => {
  //     return data.name.toLowerCase().includes(this.searchKeyword.toLowerCase());
  //   });
  // }
  
}




