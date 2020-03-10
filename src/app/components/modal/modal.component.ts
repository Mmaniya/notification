import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Modal title</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Never mind</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">DELETE</button>
        </div>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}


}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    private updateSubscription: Subscription;
    CurrentTime: any;

    constructor(private modalService: NgbModal) {
        setInterval(() => {
            // this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes()}, 1);
            this.CurrentTime = new Date()}, 1);

    }
    ngOnInit() {
        this.updateSubscription = interval(1000).subscribe(
            (val) => { 
                // if(this.CurrentTime == '13:57'){
                    // alert(this.CurrentTime);
                // const modalRef = this.modalService.open(NgbdModalContent);
                // modalRef.componentInstance.name = 'World';
                // }
          }) 

    }
}
