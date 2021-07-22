import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent implements OnInit {
obj = { Description:null, ImageUrl:null}
  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  create(){
    this.http.create(this.obj).subscribe(data => {
       console.log(data);
     });
  }

}
