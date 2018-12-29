import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }  from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getBackendService() {
    const api_endpoint = environment.backend_url;
    return this._http.get<string>(environment.backend_url);
  }
}
