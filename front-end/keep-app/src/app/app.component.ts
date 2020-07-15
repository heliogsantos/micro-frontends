import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle = false
  
  ngOnInit(): void {
    const scriptMicroFormKeep = document.createElement('script')
    scriptMicroFormKeep.src = 'http://localhost:5002/main.js'
    document.body.appendChild(scriptMicroFormKeep)

    const scriptMicroCardsKeep = document.createElement('script')
    scriptMicroCardsKeep.src = 'http://localhost:5001/main.js'
    document.body.appendChild(scriptMicroCardsKeep)

    document.body.addEventListener('click', () => {
      this.toggle = true
    })
  }
}
