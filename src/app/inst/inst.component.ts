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
    // Ultimately we want to call the "deleteInst" function. But it
    // lives inside the parent. And we don't have direct access
    // to the parent's functions.
    // Call up to parent to remove "me" from the list
    //alert('Clicked DeleteMe');
    this.delete.emit(this.theinst);
  }

}
