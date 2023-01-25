import { App } from './../model/app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  public tabs: App[];
  public appSelected: App;

  constructor() { 
    this.tabs = [];
    this.appSelected = null;
  }

  addTab(app: App){
    if(!this.existsTab(app)){
      this.tabs.push(app);
    }
    this.appSelected = app;
  }

  existsTab(app: App){
    return this.tabs.find(t => t.name == app.name)
  }

  removeTab(app: App){
    const index = this.tabs.findIndex(t => t.name == app.name);
    this.tabs.splice(index, 1);
    if(this.appSelected.name == app.name){
      this.appSelected = null;
    }
  }

}
