import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';

@Component({
  selector: 'app-inst',
  templateUrl: './inst.component.html',
  styleUrls: ['./inst.component.css']
})
export class InstComponent implements OnInit {

  myinsts: Instrument[] = [
    { kind: 'Piano', color: 'Black'},
    { kind: 'Piano', color: 'White'},
    { kind: 'Guitar', color: 'Red'}
  ]

  thekind: string = '';
  thecolor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.myinsts.push({ kind: this.thekind, color: this.thecolor });
  }

}
