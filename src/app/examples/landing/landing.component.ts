import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  datetime: any;
  time:any;
  message: string;

  constructor(private router: Router){ }

  ngOnInit() {

  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
  onClk(){
    let postData = {
      "datetime": this.datetime,
      "time":this.time,
      "message": this.message,
    }
    localStorage.setItem('message',JSON.stringify(postData));
    alert('Set Desktop Notification successfully.!');
    this.router.navigate(['/windows']);
  }

}
