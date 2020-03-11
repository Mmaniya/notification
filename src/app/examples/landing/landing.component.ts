import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  datetime: any;
  time:any;
  message: string;

  constructor() { }

  ngOnInit() {

  }
  onClk(){
    let postData = {
      "datetime": this.datetime,
      "time":this.time,
      "message": this.message,
    }
    localStorage.setItem('message',JSON.stringify(postData));
    alert('Set Desktop Notification successfully.!');
  }

}
