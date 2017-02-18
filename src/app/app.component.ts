import { DataService } from './data.service';
import { Component } from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  inputHint = "What needs to be done?";

  todos:any[] = [];

  todo:any = "default";

  data$

  selected_type:string

  constructor(public datasvc:DataService){
    
  }

  ngOnInit(){
    this.data$ = this.get();
    this.data$.subscribe(o => this.todos = o)
    
  
  }

  addTodo(evt, value){
    if(evt.keyCode === 13){
      //此寫法不好
      // this.todos.push({
      //   name : value,
      //   isChecked : false
      // })

      // 加入後產生新的物件 此種寫法才會觸發changeDetection的機制
      this.todos = [...this.todos, {name : value,isChecked : false}]
      this.todo = "";
    }
  }

  remove(item){
    var idx = this.todos.indexOf(item);
    this.todos.splice(idx,1);
    //此種寫法才會觸發changeDetection的機制
    this.todos = [...this.todos]
  }

  toggleAll(checked){
    this.todos.map(x => { 
      x.isChecked = checked 
      return x;
    })    

  }

  clearCompleted(completedTodos:any[]){
    this.todos = this.todos.filter(o => !o.isChecked)
  }

  save(){
    this.datasvc.post("/me/todoapp", this.todos);
  }

  get():Observable<any>{
    return this.datasvc.get("/me/todoapp")
  }

  getSelectedType($event){
    console.log("app" +" "+ $event)
    this.selected_type = $event
  }

  
}
