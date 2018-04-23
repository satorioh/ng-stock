import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stockId:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.stockId = this.activatedRoute.snapshot.params['id'];
    console.log(this.stockId);
  }

}
