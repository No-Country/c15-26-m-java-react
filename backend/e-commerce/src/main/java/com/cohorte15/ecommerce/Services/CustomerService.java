package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Customer;

public interface CustomerService extends BaseService<Customer, Long> {

    void registerCustomer(String name, String surname, String email, String password, String address, long phone);

    Long getLastInsertedCustomerId();

    Customer loginCustomer(String email, String password);

}
