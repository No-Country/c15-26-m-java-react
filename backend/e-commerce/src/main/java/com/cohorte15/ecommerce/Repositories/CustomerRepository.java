package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Customer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends BaseRepository<Customer, Long> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO customer (name, surname, email, password, address, phone) VALUES (:name, :surname, :email, :password, :address, :phone)", nativeQuery = true)
    void registerCustomer(
            @Param("name")String name,
            @Param("surname")String surname,
            @Param("email")String email,
            @Param("password")String password,
            @Param("address")String address,
            @Param("phone")long phone);

    @Query(value = "SELECT LAST_INSERT_ID() AS id", nativeQuery = true)
    Long getLastInsertedCustomerId();

    @Query(value = "SELECT * FROM customer WHERE email = :email AND password = :password", nativeQuery = true)
    Customer loginCustomer(
            @Param("email")String email,
            @Param("password")String password);
}
