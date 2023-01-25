import { Component, Input, OnInit } from '@angular/core';
import { App } from '../../model/app';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() app: App;

  constructor(
    public tabsService: TabsService
  ) { }

  ngOnInit() {
  }

  selectApp(){
    this.tabsService.appSelected = this.app;
  }

  closeTab($event){
    $event.stopPropagation();
    this.tabsService.removeTab(this.app);
  }

}
