package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.CustomerDTO;
import com.cohorte15.ecommerce.Entities.Customer;

import java.util.List;

public interface CustomerService extends BaseService<Customer, Long> {

    List<CustomerDTO> getAllCustomers();

    CustomerDTO getCustomerById(Long id);

    CustomerDTO getCustomerByEmail(String email);

    void registerCustomer(String name, String surname, String email, String password, long phone);

    Long getLastInsertedCustomerId();

    Customer loginCustomer(String email, String password);

}
