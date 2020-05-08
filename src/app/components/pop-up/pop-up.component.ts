import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() popUpName: string;
  @Input() title: string;
  @Input() open: boolean;

  @Output() closeAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.open = false;
    this.closeAction.emit(false);
  }

}
