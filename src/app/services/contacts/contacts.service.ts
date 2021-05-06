import { Injectable } from '@angular/core';
import { contacts } from '../../data/contacts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}
  favourites = new Set([]);
  allContacts = new Set([...contacts]);
  private privateMessage = new BehaviorSubject<any>('idle');
  currentMessage = this.privateMessage.asObservable();

  getAllContacts() {
    return this.allContacts;
  }
  setFavourite(contact: any) {
    const contactExists = this.allContacts.has(contact);
    if (contactExists) {
      this.favourites.add(contact);
      this.allContacts.delete(contact);
    }
  }
  getAllFavourites() {
    return this.favourites;
  }
  deleteFavourite(contact: any) {
    const contactExists = this.favourites.has(contact);
    if (contactExists) {
      this.allContacts.add(contact);
      this.favourites.delete(contact);
    }
  }
  sortByName() {
    let contactsToArray = Array.from(this.allContacts);
    contactsToArray = contactsToArray.sort(
      (a, b) => (a.name > b.name && 1) || -1
    );
    this.allContacts = new Set(contactsToArray);
  }
  sortByCreation() {
    let contactsToArray = Array.from(this.allContacts);
    contactsToArray = contactsToArray.sort(
      (a, b) =>
        (new Date(a.created).toLocaleDateString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }) >
          new Date(b.created).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }) &&
          1) ||
        -1
    );
    this.allContacts = new Set(contactsToArray);
  }
  searchContacts(searchParam: string) {
    let contactsToArray = Array.from(this.allContacts);
    contactsToArray = contactsToArray.filter((contact) =>
      contact.shortName.includes(searchParam)
    );
    let filteredContacts = new Set(contactsToArray);
    return filteredContacts;
  }
  changeMessage(message: Object | string) {
    this.privateMessage.next(message);
  }
}
