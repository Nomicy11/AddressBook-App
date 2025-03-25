package com.BridgeLabz.AddressBook.App.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "address_book")
public class AddressBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zipcode;
}
