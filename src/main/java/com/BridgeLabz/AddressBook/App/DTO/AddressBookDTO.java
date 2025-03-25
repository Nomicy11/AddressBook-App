package com.BridgeLabz.AddressBook.App.DTO;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class AddressBookDTO {

    @NotEmpty(message = "Name is required")
    @Pattern(regexp = "^[A-Z][a-zA-Z\\s]{2,}$", message = "Name must start with a capital letter and have at least 3 characters")
    private String name;

    @NotEmpty(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be exactly 10 digits")
    private String phone;

    @NotEmpty(message = "Address cannot be empty")
    private String address;

    @NotEmpty(message = "City cannot be empty")
    private String city;

    @NotEmpty(message = "State cannot be empty")
    private String state;

    @NotEmpty(message = "Zip Code is required") // ✅ Ensure this exists
    @Pattern(regexp = "^[0-9]{5,6}$", message = "Zip Code must be 5 or 6 digits")
    private String zipcode;
}
