import { ContactsService } from './../../services/contacts/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  constructor(private contacts: ContactsService) {}

  ngOnInit(): void {}

  orderByName() {
    this.contacts.sortByName();
    this.contacts.changeMessage('orderByName');
  }
  orderByCreation() {
    this.contacts.sortByCreation();
    this.contacts.changeMessage('orderByCreation');
  }
  searchContacts(searchParam: string) {
    const searchedContacts = this.contacts.searchContacts(searchParam);
    this.contacts.changeMessage({ name: 'search', contacts: searchedContacts });
  }
}
