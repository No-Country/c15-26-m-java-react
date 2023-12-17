package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Customer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends BaseRepository<Customer, Long> {

    // Get all customers
    @Query(value = "SELECT * FROM customer", nativeQuery = true)
    List<Customer> getAllCustomers();

    @Query(value = "SELECT * FROM customer WHERE id = :id", nativeQuery = true)
    Customer getCustomerById(@Param("id") Long id);

    // Get customer by email
    @Query(value = "SELECT * FROM customer WHERE email = :email", nativeQuery = true)
    Customer getCustomerByEmail(@Param("email") String email);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO customer (name, phone, email, address, city, state, password, confirm) VALUES (:name, :phone, :email, :address, :city, :state, :password, :confirm)", nativeQuery = true)
    void registerCustomer(
            @Param("name")String name,
            @Param("phone")long phone,
            @Param("email")String email,
            @Param("address")String address,
            @Param("city")String city,
            @Param("state")String state,
            @Param("password")String password,
            @Param("confirm")String confirm
    );

    @Query(value = "SELECT LAST_INSERT_ID() AS id", nativeQuery = true)
    Long getLastInsertedCustomerId();

    @Query(value = "SELECT * FROM customer WHERE email = :email AND password = :password", nativeQuery = true)
    Customer loginCustomer(
            @Param("email")String email,
            @Param("password")String password);
}
