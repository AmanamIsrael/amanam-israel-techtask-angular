import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.scss'],
})
export class BotsComponent implements OnInit {
  constructor() {}
  searchedContacts: any;

  ngOnInit(): void {}

  setSearched(searched) {
    this.searchedContacts = searched;
  }
}
