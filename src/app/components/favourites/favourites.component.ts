import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../../services/contacts/contacts.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  constructor(private contacts: ContactsService) {}

  allFavourites: any;

  ngOnInit(): void {
    this.allFavourites = this.contacts.getAllFavourites();
  }

  unStar(contact: Object) {
    this.contacts.deleteFavourite(contact);
  }
}
