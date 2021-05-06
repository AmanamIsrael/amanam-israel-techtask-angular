import { ContactsService } from './../../services/contacts/contacts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-bots',
  templateUrl: './all-bots.component.html',
  styleUrls: ['./all-bots.component.scss'],
})
export class AllBotsComponent implements OnInit, OnDestroy {
  constructor(private contacts: ContactsService) {}
  allContacts: any;
  listenSubscription: Subscription;
  message: any;

  ngOnInit(): void {
    this.getAllContacts();
    this.allContacts;
    this.listenSubscription = this.contacts.currentMessage.subscribe(
      (message) => {
        if (message) {
          this.message = message;
          if (message === 'orderByName' || message === 'orderByCreation') {
            this.getAllContacts();
          }
          if (message.name === 'search') {
            this.allContacts = message.contacts;
          }
        }
      }
    );
  }
  star(contact: Object) {
    this.contacts.setFavourite(contact);
  }
  getAllContacts() {
    this.allContacts = this.contacts.getAllContacts();
  }

  ngOnDestroy() {
    this.listenSubscription.unsubscribe();
  }
}
