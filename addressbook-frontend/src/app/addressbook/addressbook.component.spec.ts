import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from '../addressbook/addressbook.component';

describe('AddressbookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressBookComponent]
    });
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
