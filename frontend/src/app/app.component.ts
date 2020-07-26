import { Component, OnInit } from '@angular/core';

declare function js_main();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'frontend';
 

  ngOnInit() {
    js_main();
  }

}
