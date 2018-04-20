import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating:number = 0;
  stars:boolean[] = [];
  constructor() { }

  ngOnInit() {
    for(let i = 1; i <=5; i++){
      this.stars.push(i > this.rating );
    }
  }

}
