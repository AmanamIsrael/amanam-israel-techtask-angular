import { ContactsService } from './../../services/contacts/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.scss'],
})
export class BotDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService
  ) {}
  contact: any;

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    const allContacts = Array.from(this.contactsService.getAllContacts());
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    this.contact = allContacts.find((contact) => (contact.name = name));
    console.log(name, this.contact);
  }
}
