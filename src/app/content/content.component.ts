import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = '';
  pageDesc = '';
  constructor(public router:Router) {
    
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd)
                          .subscribe((event:NavigationEnd)=>{
                            if(event.url == '/dashboard'){
                              this.pageTitle = '这里是首页';
                              this.pageDesc = '天天赚钱';
                            }else if(event.url.startsWith('/stock')){
                              this.pageTitle = '股票信息管理';
                              this.pageDesc = '各方信息汇总';
                            }
                          })
  }

}
