import { Injectable } from '@angular/core';
import {AsyncLocalStorage} from 'angular-async-local-storage';

@Injectable()
export class UserStorageService {

  constructor(private storage: AsyncLocalStorage) { }
  getContacts() {
    return this.storage.getItem('contacts');
  }
  save (Contacts) {
    this.storage.setItem('contacts', Contacts).subscribe(() => {});
  }

}
