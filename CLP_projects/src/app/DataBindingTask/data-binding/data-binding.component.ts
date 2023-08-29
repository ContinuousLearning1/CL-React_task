import { Component } from '@angular/core';
import { Users } from 'src/app/DataClass';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
// task 1:
// " Create a Counter Component                                                                                 
// Create an Angular component called ""Counter"" that displays a number.
// Initialize the number to 0.
// Display the number in the component's template.
// Add two buttons to the template: ""Increment"" and ""Decrement"".
// Implement the functionality to increment and decrement the number when the corresponding buttons are clicked. If the value is 0 make the ""Decrement"" button disable.
// Update the displayed number in real-time as it changes.
// "

constructor(private service:DataService){}
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


  data=new Users();

  adduser(){
    var reslut=this.service.create(this.data);
    reslut.subscribe(data=>console.log(data));
  }
}
