import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  text: string = 'Add Items'
  constructor() { }

  ngOnInit() { }


  onClick() {
    this.onSubmit.emit()
  }
}
