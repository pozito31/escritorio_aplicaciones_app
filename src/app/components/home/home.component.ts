import { Component, OnInit } from '@angular/core';
import { App } from '../../model/app';
import { AppService } from '../../services/app.service';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public appsOriginal: App[];
  public appsFiltered: App[];

  constructor(
    private appService: AppService,
    public tabsService: TabsService
  ) {
    this.appsOriginal = [];
    this.appsFiltered = [];
  }

  ngOnInit() {
    this.appService.getApps().subscribe(apps => {
      this.appsOriginal = apps;
      this.appsFiltered = apps;
    })
  }

  goToApp(app: App){
    this.tabsService.addTab(app);
  }

  filterApps($event){
    console.log($event);
    if(!$event.currentTarget.value){
      this.appsFiltered = this.appsOriginal;
    }else{
      this.appsFiltered = this.appsOriginal.filter(a => a.name.toLowerCase().includes($event.currentTarget.value.toLowerCase()));
    }
  }

}
