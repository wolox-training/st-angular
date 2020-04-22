import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() class: string = 'primary';

  @Input() type: string = 'button'

  @Input() disabled: boolean = false;

  @Input() label: string = 'Button';

  @Input() oneLine: boolean = false;

  @Output() bClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  handlerClick (event) {
    this.bClick.emit(event);
  }
}
