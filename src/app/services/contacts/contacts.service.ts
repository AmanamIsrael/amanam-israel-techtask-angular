import { Injectable } from '@angular/core';
import { contacts } from '../../data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}
  favourites = new Set([]);
  allContacts = new Set([...contacts]);

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
}
