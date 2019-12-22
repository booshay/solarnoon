import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(coords){
    let coordSplit = coords.split(',');
    return this.http.get(`https://api.ipgeolocation.io/astronomy?apiKey=3bfd5cc5d0d248faa60e225cdeef4330&lat=${coordSplit[0]}&long=${coordSplit[1]}`)
  }
}
