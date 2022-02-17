import { Component,EventEmitter,Output,Input, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
    console.log(this.quoted)
this.add.emit(this.quoted);
this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
