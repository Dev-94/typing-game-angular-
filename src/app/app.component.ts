import { Component, ElementRef } from '@angular/core'
import { lorem } from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence()
  userInput = ''


  readInput(event) {
    this.userInput = event.target.value
    console.log(this.userInput)
  }

  compare(randomLetter: string, userLetter: string) {
    if (!userLetter) {
      return 'pending'
    }
    return randomLetter === userLetter ? 'correct' : 'incorrect'

  }

}
