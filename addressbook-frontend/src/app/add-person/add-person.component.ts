import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../services/addressbook.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {
  person = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    phone: ''
  };

  constructor(private addressBookService: AddressBookService, private router: Router) {}

  savePerson(): void {
    this.addressBookService.addContact(this.person).subscribe(
      () => {
        alert('Person added successfully');
        this.router.navigate(['/addressbook']); // Redirect to list
      },
      (error) => {
        console.error('Error saving person:', error);
      }
    );
  }
}
