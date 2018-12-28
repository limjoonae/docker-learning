import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-frontend';
  backend_data = '';

  constructor(private _appService: AppService) {
    this._appService.getBackendService().subscribe( response => {
      // this.backend_data = response;
      // console.log(response);
    });
  }

  getDataFromApi() {

  }
}
