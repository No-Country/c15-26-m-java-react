package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.CustomerDTO;
import com.cohorte15.ecommerce.Entities.Customer;

import java.util.List;

public interface CustomerService extends BaseService<Customer, Long> {

    List<CustomerDTO> getAllCustomers();

    CustomerDTO getCustomerById(Long id);

    CustomerDTO getCustomerByEmail(String email);

    void registerCustomer(String name, long phone, String email, String address, String city, String state, String password, String confirm);

    Long getLastInsertedCustomerId();

    Customer loginCustomer(String email, String password);

}
