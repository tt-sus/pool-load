import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
change(){
  this.onChange.emit()
}
  ngOnInit() {
  }

}
