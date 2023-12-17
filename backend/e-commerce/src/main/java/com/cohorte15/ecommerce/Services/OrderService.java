package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.*;
import com.cohorte15.ecommerce.Entities.Order;

import java.sql.Date;
import java.util.List;

public interface OrderService extends BaseService<Order, Long> {

    ResponseOrderDTO create(OrderDTO orderDTO);

    void deleteOrderById(Long order_id);

    void updateOrderStatus(Long order_id);

    Long getLastInsertedOrderId();

    List<OrderWithDetailsReducedDTO> getOrdersByCustomerId(Long customer_id);

    OrderAloneDTO getOrder(Long order_id);
}
