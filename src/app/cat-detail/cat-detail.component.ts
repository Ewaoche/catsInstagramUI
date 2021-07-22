import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/Cat';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {
  id:string = '';
  cats = [];
  constructor(private route:ActivatedRoute, private httpservice:HttpService) { 
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.httpservice.getCat(this.id).subscribe(res => {
        console.log(res);

      });

    });
  }

  ngOnInit(): void {
  }

}
