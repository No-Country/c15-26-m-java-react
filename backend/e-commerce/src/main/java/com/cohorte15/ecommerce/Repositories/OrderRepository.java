package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Order;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;

@Repository
public interface OrderRepository extends BaseRepository<Order, Long>{

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `order` (completed, order_date, customer_id, address, city, country, credit_card_number, credit_card_type, cvv, shipment_date, state, zip_code) " +
            "VALUES (:completed, :order_date, :customer_id, :address, :city, :country, :credit_card_number, :credit_card_type, :cvv, :shipment_date, :state, :zip_code)", nativeQuery = true)
    void create(
            @Param("completed")boolean completed,
            @Param("order_date") Date order_date,
            @Param("customer_id")int customer_id,
            @Param("address")String address,
            @Param("city")String city,
            @Param("country")String country,
            @Param("credit_card_number")String credit_card_number,
            @Param("credit_card_type")String credit_card_type,
            @Param("cvv")String cvv,
            @Param("shipment_date")Date shipment_date,
            @Param("state")String state,
            @Param("zip_code")String zip_code);

    @Query(value = "SELECT LAST_INSERT_ID() AS order_id", nativeQuery = true)
    Long getLastInsertedCustomerId();

    // Get all orders_id by customer id
    @Query(value = "SELECT id FROM `order` WHERE customer_id = :customer_id", nativeQuery = true)
    Long[] getOrdersIdByCustomerId(@Param("customer_id")Long customer_id);
}