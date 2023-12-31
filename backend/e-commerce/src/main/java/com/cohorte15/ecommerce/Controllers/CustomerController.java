package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.DTOs.CustomerDTO;
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

    @GetMapping("")
    public ResponseEntity<?> getAllCustomers() {
        try {
            return ResponseEntity.status(200).body(customerService.getAllCustomers());
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable(value = "id") Long id) {
        try {
            return ResponseEntity.status(200).body(customerService.getCustomerById(id));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody Customer customer) {
        try {
            String name = customer.getName();
            long phone = customer.getPhone();
            String email = customer.getEmail();
            String address = customer.getAddress();
            String city = customer.getCity();
            String state = customer.getState();
            String password = customer.getPassword();
            String confirm = customer.getConfirm();


            if (customerService.getCustomerByEmail(email) != null) {
                RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

                registerCustomerDTO.setState("ERROR");
                registerCustomerDTO.setMessage("Email already registered.");
                registerCustomerDTO.setUser(null);

                return ResponseEntity.status(400).body(registerCustomerDTO);
            }

            customerService.registerCustomer(name, phone, email, address, city, state, password, confirm);

            Long user_id = customerService.getLastInsertedCustomerId();

            CustomerDTO customerDTO = new CustomerDTO();

            customerDTO.setId(user_id);
            customerDTO.setName(name);
            customerDTO.setEmail(email);
            customerDTO.setPhone(phone);
            customerDTO.setAddress(address);
            customerDTO.setCity(city);
            customerDTO.setState(state);


            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("OK");
            registerCustomerDTO.setMessage("Customer registered successfully.");
            registerCustomerDTO.setUser(customerDTO);

            return ResponseEntity.status(201).body(registerCustomerDTO);
        } catch (Exception e) {

            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("ERROR");
            registerCustomerDTO.setMessage("Customer not registered.");
            registerCustomerDTO.setUser(null);

            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginCustomerDTO loginCustomerDTO) {
        try {
            String email = loginCustomerDTO.getEmail();
            String password = loginCustomerDTO.getPassword();

            Customer customerLogin = customerService.loginCustomer(email, password);

            CustomerDTO customerDTO = new CustomerDTO();

            customerDTO.setId(customerLogin.getId());
            customerDTO.setName(customerLogin.getName());
            customerDTO.setEmail(customerLogin.getEmail());
            customerDTO.setPhone(customerLogin.getPhone());
            customerDTO.setAddress(customerLogin.getAddress());


            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("OK");
            registerCustomerDTO.setMessage("Customer logged in successfully.");
            registerCustomerDTO.setUser(customerDTO);

            return ResponseEntity.status(201).body(registerCustomerDTO);
        } catch (Exception e) {

            RegisterCustomerDTO registerCustomerDTO = new RegisterCustomerDTO();

            registerCustomerDTO.setState("ERROR");
            registerCustomerDTO.setMessage("Customer not logged in.");
            registerCustomerDTO.setUser(null);

            return ResponseEntity.status(400).body(registerCustomerDTO);
        }
    }
}
