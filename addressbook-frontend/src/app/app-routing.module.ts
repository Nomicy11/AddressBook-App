import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './addressbook/addressbook.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'addressbook', pathMatch: 'full' },
  { path: 'addressbook', component: AddressBookComponent },
  { path: 'register', component: AddPersonComponent }, // Route for the form
  { path: 'edit/:id', component: EditContactComponent } // Edit contact page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
