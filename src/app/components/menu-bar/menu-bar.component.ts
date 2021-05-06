import { ContactsService } from './../../services/contacts/contacts.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  constructor(private contacts: ContactsService) {}

  ngOnInit(): void {}
  @Output() renderAllContacts = new EventEmitter();

  orderByName() {
    this.contacts.sortByName();
  }
  orderByCreation() {
    this.contacts.sortByCreation();
  }
  searchContacts(searchParam: string) {
    this.contacts.searchContacts(searchParam);
    this.renderAllContacts.emit('renderContacts');
  }
}
