package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Customer;
import com.cohorte15.ecommerce.Repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl extends BaseServiceImpl<Customer, Long> implements CustomerService {

    @Autowired
    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        super(customerRepository);
        this.customerRepository = customerRepository;
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
