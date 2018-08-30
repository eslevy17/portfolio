import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.css'],
  animations: [
    trigger('fade', [
        state('void', style({opacity: 0})),
        transition(':enter, :leave', [
            animate(500)
        ]),
    ])
]
})
export class MinimalComponent implements OnInit {
    data: any;
    constructor(private _parent: AppComponent) { }

    ngOnInit() {
        this.data = this._parent.data
    }
}