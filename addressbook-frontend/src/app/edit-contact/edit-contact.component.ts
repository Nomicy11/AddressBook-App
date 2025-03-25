import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from '../services/addressbook.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  person: any = {};
  personId: number = 0; // Store the ID separately

  constructor(
    private route: ActivatedRoute,
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personId = Number(this.route.snapshot.paramMap.get('id')); // Convert to number
    if (!this.personId) {
      alert("Invalid Contact ID");
      this.router.navigate(['/']);
      return;
    }

    this.addressBookService.getContactById(this.personId).subscribe(
      (data) => {
        this.person = data;
      },
      (error) => {
        console.error('Error fetching contact:', error);
      }
    );
  }

  updateContact() {
    if (!this.personId) {
      alert("Error: Contact ID is missing");
      return;
    }

    this.addressBookService.updateContact(this.personId, this.person).subscribe(
      () => {
        alert('Contact updated successfully!');
        this.router.navigate(['/']); // Redirect to list
      },
      (error) => {
        console.error('Error updating contact:', error);
        alert('Failed to update contact.');
      }
    );
  }

  cancelEdit() {
    this.router.navigate(['/']); // Go back to list
  }
}
