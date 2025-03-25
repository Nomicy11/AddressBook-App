import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private baseUrl = 'http://localhost:8080/addressbook';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  addContact(person: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, person);
  }

  
  // Get a contact by ID
  getContactById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Update contact
  updateContact(id: number, contactData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, contactData);
  }
  

  // Delete contact
  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
