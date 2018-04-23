import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 3.5, '第1只股票，大牛股', ['IT', '互联网']),
      new Stock(2, '第二只股票', 2.99, 4.5, '第2只股票，大牛股', ['IT', '金融']),
      new Stock(3, '第三只股票', 3.99, 3.5, '第3只股票，大牛股', ['银行', 'IT']),
      new Stock(4, '第四只股票', 4.99, 1.5, '第4只股票，大牛股', ['银行', '互联网']),
      new Stock(5, '第五只股票', 5.99, 2.5, '第5只股票，大牛股', ['农业']),
      new Stock(6, '第六只股票', 6.99, 3.5, '第6只股票，大牛股', ['IT', '银行']),
      new Stock(7, '第七只股票', 7.99, 2.5, '第7只股票，大牛股', ['互联网']),
      new Stock(8, '第八只股票', 8.99, 1.5, '第8只股票，大牛股', ['农业']),
    ];
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock){
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
