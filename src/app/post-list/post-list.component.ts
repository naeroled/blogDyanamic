import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class HomeComponent implements OnInit {

  posts = 'jello'

  constructor() { }

  ngOnInit(): void {
  }

}
