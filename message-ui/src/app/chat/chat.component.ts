import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user1Url = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200";
  user2Url = "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg";
  constructor(public screenService: ScreenService) { }

  ngOnInit() {
    // console.log("scren width in chat component", this.screenService.screenWidth);

  }

}
