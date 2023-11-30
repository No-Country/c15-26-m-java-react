package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.DTOs.LoginCustomerDTO;
import com.cohorte15.ecommerce.DTOs.RegisterCustomerDTO;
import com.cohorte15.ecommerce.Entities.Customer;
import com.cohorte15.ecommerce.Services.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/customer")
public class CustomerController extends BaseControllerImpl<Customer, CustomerServiceImpl> {

    @Autowired
    private CustomerServiceImpl customerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody Customer customer) {
        try {
            String name = customer.getName();
            String surname = customer.getSurname();
            String email = customer.getEmail();
            String password = customer.getPassword();
            String address = customer.getAddress();
            long phone = customer.getPhone();

            customerService.registerCustomer(name, surname, email, password, address, phone);

            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("OK");
            registerCustomerDTO.setMessage("Customer registered successfully.");
            registerCustomerDTO.setUser(customer.getName() + " " + customer.getSurname());

            return ResponseEntity.status(201).body(registerCustomerDTO);
        } catch (Exception e) {

            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("ERROR");
            registerCustomerDTO.setMessage("Customer not registered.");
            registerCustomerDTO.setUser("");

            return ResponseEntity.status(400).body(registerCustomerDTO);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginCustomerDTO loginCustomerDTO) {
        try {
            String email = loginCustomerDTO.getEmail();
            String password = loginCustomerDTO.getPassword();

            Customer customerLogin = customerService.loginCustomer(email, password);

            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("OK");
            registerCustomerDTO.setMessage("Customer logged in successfully.");
            registerCustomerDTO.setUser(customerLogin.getName() + " " + customerLogin.getSurname());

            return ResponseEntity.status(201).body(registerCustomerDTO);
        } catch (Exception e) {

            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("ERROR");
            registerCustomerDTO.setMessage("Customer not logged in.");
            registerCustomerDTO.setUser("");

            return ResponseEntity.status(400).body(registerCustomerDTO);
        }
    }
}
