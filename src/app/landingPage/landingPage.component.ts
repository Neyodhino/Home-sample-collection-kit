import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'landingPage',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent implements OnInit {
  heart = faHeart;
  constructor() { }

  ngOnInit(): void { }
  downloadFile(){
    const link = document.createElement('a');
    link.download = 'how-to-use';
    link.href = '../../assets/audio/how-to-use.mpeg';
    link.click();
}
}
