import { Component,Input ,EventEmitter, Output ,OnChanges,OnInit, DoCheck,AfterContentInit,
  AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() parentData: number;
   
  @Output() messageEvent = new EventEmitter<number>();

  constructor() { console.log('Constructor Work!');}

  childData: number;

  onClick2Parent(){
    this.childData+=1;
    this.messageEvent.emit(this.childData);
  }

  ngOnInit(): void {
    this.childData=0;
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Work!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Work!");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Work!");
  }
  ngAfterViewInit(){
    console.log("ngAfterVeiwInit Work!");
  }
  ngDoCheck(){
    console.log("ngDocheck Work!");
  }
  ngOnChanges(){
    console.log("ngOnChanges Work!");
  }
  ngOnDestroy(){
    console.log("ngOnChanges Work!");
  }
  
}
