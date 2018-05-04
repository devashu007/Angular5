import { Component } from '@angular/core';
import { firstcomp } from './app.firstcomponent';









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})






export class AppComponent {
  public task:boolean=true;
  title = 'call karo';

  myMethod(){
     alert("buuton cliked");

  }

}


