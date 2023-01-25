import { Component, Input, OnInit } from '@angular/core';
import { TabsService } from '../../services/tabs.service';
import { App } from '../../model/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() app: App;

  constructor(
    public tabsService: TabsService
  ) {

  }

  ngOnInit() {

  }

  clickHome(){
    this.tabsService.appSelected = null;
  }

}
