import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private catUrl = environment.catUrl;
  private createcatUrl = this.catUrl + 'createcat';
  private getcatUrl = this.catUrl + 'getAllCats';
  private getCatByidUrl = this.catUrl + 'getownersCat/';


  constructor(private http:HttpClient, private authservice:AuthService) { }

  create(data:any):Observable<Cat>{
    return this.http.post<Cat>(this.createcatUrl, data);
  }

  getAllCats(){
    return this.http.get(this.getcatUrl);

  }

  getCat(id:string){
    return this.http.get(this.getCatByidUrl + id);
  }
}
