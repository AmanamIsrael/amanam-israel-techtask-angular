import { contacts } from './../../data/contacts';
import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(() => {
    // let searchServiceSpy: jasmine.SpyObj<ContactsService>;
    // searchServiceSpy = jasmine.createSpyObj('ContactsService', ['searchContacts']);
    // searchServiceSpy.searchContacts.and.returnValue({});

    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // basic unit tests

  //testing that contacts should be an array of at least one element
  it('contacts should be an array of at least one element', () => {
    expect(contacts.length).toBeGreaterThanOrEqual(1);
  });

  //testing that service functions are available
  it('search contacts is available', () => {
    expect(service.searchContacts).toBeDefined();
  });
  it('get all contacts is available', () => {
    expect(service.getAllContacts).toBeDefined();
  });
  it('sort contacts by name is available', () => {
    expect(service.sortByName).toBeDefined();
  });
  it('sort contacts by creation is available', () => {
    expect(service.sortByCreation).toBeDefined();
  });
});
