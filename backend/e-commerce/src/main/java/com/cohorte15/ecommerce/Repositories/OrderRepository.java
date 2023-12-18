package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Order;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface OrderRepository extends BaseRepository<Order, Long>{

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `order` (order_date, pending, customer_id, address, city, state, card_owner, owner_dni, card_type, card_number, expiration_date, cvv) " +
            "VALUES (:order_date, :pending, :customer_id, :address, :city, :state, :card_owner, :owner_dni, :card_type, :card_number, :expiration_date, :cvv)", nativeQuery = true)
    void create(
            @Param("order_date") Date order_date,
            @Param("pending")boolean pending,
            @Param("customer_id")Long customer_id,
            @Param("address")String address,
            @Param("city")String city,
            @Param("state")String state,
            @Param("card_owner")String card_owner,
            @Param("owner_dni")int owner_dni,
            @Param("card_type")String card_type,
            @Param("card_number")String card_number,
            @Param("expiration_date")String expiration_date,
            @Param("cvv")String cvv);

    // Delete order by id
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM `order` WHERE id = :order_id", nativeQuery = true)
    void deleteOrderById(@Param("order_id")Long order_id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE `order` SET pending = false WHERE id = :order_id", nativeQuery = true)
    void updateOrderStatus(@Param("order_id")Long order_id);

    @Query(value = "SELECT LAST_INSERT_ID() AS order_id", nativeQuery = true)
    Long getLastInsertedOrderId();

    // Get all orders_id by customer id
    @Query(value = "SELECT id FROM `order` WHERE customer_id = :customer_id", nativeQuery = true)
    Long[] getOrdersIdByCustomerId(@Param("customer_id")Long customer_id);

    // Get order by id
    @Query(value = "SELECT " +
            "id, " +
            "pending, " +
            "order_date, " +
            "customer_id, " +
            "address, " +
            "city, " +
            //"credit_card_number, " +
            //"credit_card_type, " +
            //"cvv, " +
            "shipment_date, " +
            "state, " +
            "zip_code " +
            "FROM `order` " +
            "WHERE id = :order_id", nativeQuery = true)
    List<Object[]> getOrderById(@Param("order_id")Long order_id);
}
