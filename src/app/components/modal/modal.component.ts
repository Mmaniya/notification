import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Notification</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    {{this.setmsg.message}}
    </div>`
})
export class NgbdModalContent {
    @Input() name;
    setmsg:any;

    constructor(public activeModal: NgbActiveModal) {
        this.setmsg = JSON.parse(localStorage.getItem('message'));
    }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    private updateSubscription: Subscription;
    formatted_date: any;
    settime:any;
    modifydate:any;
    constructor(private modalService: NgbModal) {
        this.settime = JSON.parse(localStorage.getItem('message'));
        function appendLeadingZeroes(n){
            if(n <= 9){
              return "0" + n;
            }
            return n
          }

        setInterval(() => {
            let current_datetime = new Date()
            // this.formatted_date = current_datetime.getFullYear() + '-' + appendLeadingZeroes(current_datetime.getMonth() +1) + '-' + current_datetime.getDate() + '' + (((current_datetime.getHours() +24) % 12 || 12) < 10 ? '0' : '') + ((current_datetime.getHours() +12 ) % 12 || 12) + ':' + current_datetime.getMinutes()
            this.formatted_date = current_datetime.getFullYear() + '-' + appendLeadingZeroes(current_datetime.getMonth() +1) + '-' + current_datetime.getDate() + '' + current_datetime.getHours() + ':' + current_datetime.getMinutes()
        }, 1);
        this.modifydate = this.settime.datetime +''+this.settime.time
    }
    ngOnInit() {
        //    
        this.updateSubscription = interval(15000).subscribe(
            (val) => { 
                // alert(this.formatted_date);
                // alert(this.modifydate);  
                if(this.formatted_date == this.modifydate){
                const modalRef = this.modalService.open(NgbdModalContent);
                modalRef.componentInstance.name = 'World';
                }
          }) 

    }
}
