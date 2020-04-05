import { Component,ViewChild , OnChanges,OnInit, DoCheck,AfterContentInit,
          AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,NgModule} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges,OnInit, DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {



  @ViewChild(ChildComponent)
  childComponent: ChildComponent;
  parentData: number;
  childData : number;
  textMessage : string;
  status : string;
  showChild = true;
  constructor() { console.log('Constructor Work!');}

  ngOnInit(): void {
    this.parentData=0;
  }

  ngAfterContentChecked(){
    if(this.textMessage =="B6014728"){
      this.status = "Your ID is OK";
    }
    else{
      this.status = "Error";
    }
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
    console.log(this.textMessage);
    console.log("ngDocheck Work!");
  }
  ngOnChanges(){
    console.log("ngOnChanges Work!");
  }
  ngOnDestroy(){
    console.log("ngOnChanges Work!");
  }

  onClick2Child(){
    this.parentData+=1;
  }

  receiveData($event){
    this.childData= $event;
  }
  
  onClickViewChild(){
    this.childComponent.onClick2Parent();
  }

  onUpdate(){
    this.showChild= !this.showChild;
  }
  

}
