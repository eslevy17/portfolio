import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('fade', [
        state('void', style({opacity: 0})),
        transition(':enter, :leave', [
            animate(500)
        ]),
    ])
]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
