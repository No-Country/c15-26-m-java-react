package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.OrderAloneDTO;
import com.cohorte15.ecommerce.DTOs.OrderWithDetailsDTO;
import com.cohorte15.ecommerce.DTOs.OrderWithDetailsReducedDTO;
import com.cohorte15.ecommerce.Entities.Order;

import java.sql.Date;
import java.util.List;

public interface OrderService extends BaseService<Order, Long> {

    void create(boolean pending, Date order_date, int customer_id, String address, String city, String country, String credit_card_number, String credit_card_type, String cvv, Date shipment_date, String state, String zip_code);

    void deleteOrderById(Long order_id);

    void updateOrderStatus(Long order_id);

    Long getLastInsertedOrderId();

    List<OrderWithDetailsReducedDTO> getOrdersByCustomerId(Long customer_id);

    OrderAloneDTO getOrder(Long order_id);
}
