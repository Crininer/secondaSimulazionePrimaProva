import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  links: Array<{
    text: string;
    destination: string;
  }>;

  constructor() {}

  ngOnInit(): void {}

  scrollInto(id: string) {
    let el =
      document.getElementById(id).offsetTop -
      document.getElementById('sub-nav').offsetHeight -
      80;
    console.log(document.getElementById('sub-nav').offsetHeight);
    window.scroll({ top: el, behavior: 'smooth' });
  }
}
