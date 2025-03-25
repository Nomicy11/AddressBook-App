import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './addressbook/addressbook.component';
import { AppRoutingModule } from './app-routing.module'; //  Import the Routing Module
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './add-person/add-person.component'; // Import this module
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './edit-contact/edit-contact.component'; //  Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddPersonComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add this here
    AppRoutingModule, // Ensure AppRoutingModule is imported
    FormsModule //  Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
