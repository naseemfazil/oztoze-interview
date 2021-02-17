import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public screenService: ScreenService) {

  }

  messages: Array<any> = [
    {
      isGroup: true,
      count: 14,
      name: "Special class students",
      time: "18:31",
      lastMessage: "Pls take a look at this message",
      profile: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Don Norman",
      time: "16:04",
      lastMessage: "Hello guys, we discussed about..",
      profile: "https://i.pravatar.cc/150?img=14",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Lee Williamson",
      time: "06:12",
      lastMessage: "Yes, that's goona work, hopefully.",
      profile: "https://i.pravatar.cc/150?img=15",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Ronald Mccoy",
      time: "Yesterday",
      lastMessage: "Thanks Dude",
      profile: "https://i.pravatar.cc/150?img=16",
      isYou: true,
    },
    {
      isGroup: false,
      count: 0,
      name: "Albert Bell",
      time: "Yesterday",
      lastMessage: "I'm happy this chapter has gree..",
      profile: "https://i.pravatar.cc/150?img=17",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Ronald Mccoy",
      time: "Yesterday",
      lastMessage: "Thanks Dude",
      profile: "https://i.pravatar.cc/150?img=18",
      isYou: true,
    },
    {
      isGroup: false,
      count: 0,
      name: "Albert Bell",
      time: "Yesterday",
      lastMessage: "I'm happy this chapter has gree..",
      profile: "https://i.pravatar.cc/150?img=19",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Ronald Mccoy",
      time: "Yesterday",
      lastMessage: "Thanks Dude",
      profile: "https://i.pravatar.cc/150?img=20",
      isYou: true,
    },
  ];

  ngOnInit() {
  }

}
