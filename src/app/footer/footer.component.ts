import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  @Input()
  todos:any[];
  
  selected_type:string;
  

  get activeLength() {
    return  this.todos.filter(o=>!o.isChecked).length;
  }
  

  constructor() { }

  ngOnInit() {
  }
  
  @Output()
  clear = new EventEmitter()
  
  @Output()
  pass = new EventEmitter()
  
  clearCompletedEvtEmitter(){
    
    this.clear.emit();
  } 
  
  passSelectedType(type){
    console.log(type)
    this.pass.emit(type)
  }

}
