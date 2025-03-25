import { Component, OnInit } from '@angular/core';
import { AddressBookService } from '../services/addressbook.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressBookComponent implements OnInit {
  persons: any[] = []; // Holds person data
 


  constructor(private addressBookService: AddressBookService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPersons();
  }
  
  fetchPersons(): void {
    this.addressBookService.getAllContacts().subscribe(
      (data) => {
        this.persons = data;
      },
      (error) => {
        console.error('Error fetching persons:', error);
      }
    );
  }

    // Navigate to Edit Contact page
    editContact(id: number) {
      this.router.navigate(['/edit', id]); // Navigate to Edit Page
    }
  
    // Delete Contact
    deleteContact(id: number) {
      this.http.delete(`http://localhost:8080/addressbook/${id}`, { responseType: 'text' }) // 👈 Fix: Expect text response
        .subscribe({
          next: (response: any) => {
            console.log('Delete response:', response);
            alert('Person deleted successfully!');
            this.fetchPersons(); // Refresh the list after deletion
          },
          error: (error: any) => {
            console.error('Error deleting contact:', error);
            alert('Failed to delete data');
          }
        });
    }
    
  }
