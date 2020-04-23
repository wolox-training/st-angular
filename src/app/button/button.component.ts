import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('class')
  bClass: string = 'primary';

  @Input('type')
  bType: string = 'button'

  @Input('disabled')
  bDisabled: boolean = false;

  @Input('label')
  label: string = 'Button';

  @Input('oneLine')
  oneLine: boolean = false;

  @Output() bClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  handlerClick (event) {
    this.bClick.emit(event);
  }
}
