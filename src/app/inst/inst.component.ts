import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Instrument } from '../instrument';

@Component({
  selector: 'app-inst',
  templateUrl: './inst.component.html',
  styleUrls: ['./inst.component.css']
})
export class InstComponent implements OnInit {

  @Input() theinst: Instrument = {
    kind: 'Piano',
    color: 'Black'
  };

  @Output() delete: EventEmitter<Instrument> = new EventEmitter<Instrument>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe() {
    // Call up to parent to remove "me" from the list
    //alert('Clicked DeleteMe');
    this.delete.emit(this.theinst);
  }

}
