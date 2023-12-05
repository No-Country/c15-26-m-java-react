package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.DTOs.OrderDetailDTO;
import com.cohorte15.ecommerce.Entities.OrderDetail;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends BaseRepository<OrderDetail, Long>{

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO order_detail (product_quantity, price, order_id, product_id) VALUES (:product_quantity, :price, :order_id, :product_id)", nativeQuery = true)
    void saveOrderDetail(
            @Param("product_quantity")int product_quantity,
            @Param("price")int price,
            @Param("order_id")Long order_id,
            @Param("product_id")Long product_id);

    // Get all order details by order id
    @Query(value = "SELECT id, price, product_quantity, product_id FROM order_detail WHERE order_id = :order_id", nativeQuery = true)
    List<Object[]> getOrderDetailsByOrderId(@Param("order_id")Long order_id);

    // Get order detail by id
    @Query(value = "SELECT id, price, product_quantity, product_id FROM order_detail WHERE id = :order_detail_id", nativeQuery = true)
    List<Object[]> getOrderDetailById(@Param("order_detail_id")Long order_detail_id);

}
