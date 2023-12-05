package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.CustomerDTO;
import com.cohorte15.ecommerce.Entities.Customer;
import com.cohorte15.ecommerce.Repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceImpl extends BaseServiceImpl<Customer, Long> implements CustomerService {

    @Autowired
    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        super(customerRepository);
        this.customerRepository = customerRepository;
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> customers = customerRepository.getAllCustomers();

        List<CustomerDTO> customerDTOs = new ArrayList<>();

        for (Customer customer : customers) {
            CustomerDTO customerDTO = new CustomerDTO();

            customerDTO.setId(customer.getId());
            customerDTO.setName(customer.getName());
            customerDTO.setSurname(customer.getSurname());
            customerDTO.setEmail(customer.getEmail());
            customerDTO.setPhone(customer.getPhone());

            customerDTOs.add(customerDTO);
        }

        return customerDTOs;
    }

    @Override
    public CustomerDTO getCustomerById(Long id) {
        Customer customer = customerRepository.getCustomerById(id);

        CustomerDTO customerDTO = new CustomerDTO();

        customerDTO.setId(customer.getId());
        customerDTO.setName(customer.getName());
        customerDTO.setSurname(customer.getSurname());
        customerDTO.setEmail(customer.getEmail());
        customerDTO.setPhone(customer.getPhone());

        return customerDTO;
    }

    @Override
    public void registerCustomer(String name, String surname, String email, String password, long phone) {
        customerRepository.registerCustomer(name, surname, email, password, phone);
    }

    @Override
    public Long getLastInsertedCustomerId() {
        return customerRepository.getLastInsertedCustomerId();
    }

    @Override
    public Customer loginCustomer(String email, String password) {
        return customerRepository.loginCustomer(email, password);
    }
}
