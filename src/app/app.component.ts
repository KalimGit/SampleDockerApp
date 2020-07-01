import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleDockerApp';

  appleVote  = 0;
  orangeVote = 0;

  castVote(value){
    if(value == 'apple')
      this.appleVote = this.appleVote + 1;
    else if(value == 'orange')
       this.orangeVote = this.orangeVote + 1;
  }
}
