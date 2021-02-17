import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public screenService: ScreenService) {
    // console.log("scren width in layout component", this.screenService.screenWidth);
    // if (this.screenService.screenWidth < 1440) {
    //   $('#side-nav').css('display', 'none');
    //   $('#chat-area').css('display', 'none');
    // }
  }

  ngOnInit() {
  }

}
