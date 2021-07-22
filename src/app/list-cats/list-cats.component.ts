import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/Cat';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.scss']
})
export class ListCatsComponent implements OnInit {

  constructor(private httpservice:HttpService) { }
    Cats:any;

  ngOnInit(): void {
    this.getAllCats();

  }

  getAllCats(){
    this.httpservice.getAllCats().subscribe((success) => {
      this.Cats = success;
    });
  }



}
