import { Component } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent {
  currentTime: string | undefined;
  ngOnInit() {
    this.updateCurrentTime();
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000); // Update time every second
  }
  updateCurrentTime() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString();
  }


  


}
