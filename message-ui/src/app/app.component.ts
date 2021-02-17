import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { ScreenService } from './screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @HostListener('window:resize', ['$event'])

  // public innerWidth: any;

  // constructor(public screenService: ScreenService) { }
  // onResize(event) {
  //   console.log("on resize")
  //   this.innerWidth = event.target.innerWidth;
  //   console.log(this.innerWidth)
  //   this.screenService.screenWidth = this.innerWidth;
  // }

  // title = 'message-ui';
  // ngOnInit() {
  //   console.log("ng on inint");
  //   this.innerWidth = window.innerWidth;
  //   this.screenService.screenWidth = this.innerWidth;
  //   console.log(this.innerWidth)
  //}
}
