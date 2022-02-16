import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title='Begin with quote app!'
  quotes:Quote[]=[
    new Quote(1,'Michael','motivation','Yes we can.','Barrack Obama', new Date(2019,7,12),0,0)
    new Quote(2,'Michael','Inspiring','Forever young.','Jayz',new Date(2017,8,8)0,0)
  ];
  get sortQuotes(){
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id=arraysize+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push
  }
  quoteDelete(isReady, index){
    if (isReady){
      let toDelete= confirm("Do you really want to delete?")
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  displayInfo(index){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
  }
  

  constructor() {}

  ngOnInit(): void {
  }

}
