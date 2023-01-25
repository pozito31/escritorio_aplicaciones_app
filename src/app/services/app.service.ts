import { App } from './../model/app';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getApps(){
    return this.http.get('./assets/apps/apps.json').pipe(
      map( (data: any[]) => {

        if(data){
          const apps: App[] = [];
          data.forEach(a => {
            const app = new App();
            app.name = a.name;
            app.location = a.location;
            app.icon = a.icon;
            apps.push(app);
          })

          return apps;
        }else{
          return [];
        }
      })
    )
  }

}
