import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Date and time 

   currentTime: string | undefined;

  ngOnInit() {
    this.updateCurrentTime();
    setInterval(()=>{
      this.updateCurrentTime();
    },1000);
    // setInterval(() => {
    //   this.updateCurrentTime();
    // }, 1000); // Update time every second
  }

  updateCurrentTime() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString();
  }
   num:number=0;

  increase(){
    this.num++;

  }
  decrease(){
   
    this.num--;
  }
  
  Disable(){
    return this.num==0;
  }

  message:string="";

  products = [
    { name: 'mobile', price: 9.99 },
    { name: 'laptop', price: 19.99 },
    { name: 'smort watch', price: 29.99 }
  ];

  details:string[]=["mobile","spects","laptop"];
  


}
