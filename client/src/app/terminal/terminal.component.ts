import { Component, HostListener, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  animations: [
    trigger('fade', [
        state('void', style({opacity: 0})),
        transition(':enter, :leave', [
            animate(500)
        ]),
    ])
]
})
export class TerminalComponent implements OnInit {
    data: any;
    blinkinterval: any;
    subsections: any = document.getElementsByClassName('subsection');

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 67){
            this.contactDisplay();
        }
        if (event.keyCode == 88){
            this.experienceDisplay();
        }
        if (event.keyCode == 69){
            this.educationDisplay();
        }
        if (event.keyCode == 78){
            this.interestsDisplay();
        }
        if (event.keyCode == 83){
            this.skillsDisplay();
        }
        if (event.keyCode == 73){
            this.introDisplay();
        }
        if (event.keyCode == 80){
            this.projectDisplay();
        }
        if (event.keyCode == 27){
            this.escapeBack();
        }
    }
    constructor(
        private _router: Router,
        private _parent: AppComponent
    ) { }

    ngOnInit() {
        this.data = this._parent.data
        this.blinkinterval = setInterval(this.cursorBlink, 500);
        this.load()
  }

    load() {
        let loadingbay = document.getElementById('loadingbay')
        let loadingbar = document.getElementById('loadingbar')
        let content = document.getElementById('content')
        let width = 1;
        let interval = setInterval(progress, 100);
        function progress() {
            if (width >= 100) {
                loadingbar.style.width = width + '%';
                loadingbay.style.display = 'none';
                content.style.display = 'block';
                clearInterval(interval)
            }
            else {
                let increment = Math.floor((Math.random() * 5));
                if (width < 96) {
                    width += increment;
                }
                else {
                    width ++
                }
                loadingbar.style.width = width + '%';
            }
        }
    }

    cursorBlink() {
        let cursor = document.getElementById('cursor');
        cursor.style.backgroundColor = cursor.style.backgroundColor == 'black' ? 'green' : 'black';
    }

    stopCursor() {
        clearInterval(this.blinkinterval)
    }

    hideSubsections() {
        var i;
        for (i = 0; i < this.subsections.length; i ++) {
            this.subsections[i].style.display = 'none';
        }
    }

    contactDisplay() {
        this.hideSubsections();
        document.getElementById('contact').style.display = 'block';
    }

    experienceDisplay() {
        this.hideSubsections();
        document.getElementById('experience').style.display = 'block';
    }

    educationDisplay() {
        this.hideSubsections();
        document.getElementById('education').style.display = 'block';
    }

    interestsDisplay() {
        this.hideSubsections();
        document.getElementById('interests').style.display = 'block';
    }

    skillsDisplay() {
        this.hideSubsections();
        document.getElementById('skills').style.display = 'block';
    }

    introDisplay() {
        this.hideSubsections();
        document.getElementById('intro').style.display = 'block';
    }

    projectDisplay() {
        this.hideSubsections();
        document.getElementById('projects').style.display = 'block';
    }

    escapeBack() {
        this.stopCursor()
        this._router.navigate(['/'])
    }

}
