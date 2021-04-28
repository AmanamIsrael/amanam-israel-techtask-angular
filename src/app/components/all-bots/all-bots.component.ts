import { ContactsService } from './../../services/contacts/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-bots',
  templateUrl: './all-bots.component.html',
  styleUrls: ['./all-bots.component.scss'],
})
export class AllBotsComponent implements OnInit {
  constructor(private contacts: ContactsService) {}
  allContacts: any;

  ngOnInit(): void {
    this.allContacts = this.contacts.getAllContacts();
    this.allContacts;
    console.log(this.allContacts);
  }
  star(contact: Object) {
    this.contacts.setFavourite(contact);
  }
}
