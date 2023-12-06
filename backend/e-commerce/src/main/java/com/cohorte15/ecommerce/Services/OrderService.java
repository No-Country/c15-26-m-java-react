package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.OrderAloneDTO;
import com.cohorte15.ecommerce.DTOs.OrderDTO;
import com.cohorte15.ecommerce.DTOs.OrderWithDetailsDTO;
import com.cohorte15.ecommerce.DTOs.OrderWithDetailsReducedDTO;
import com.cohorte15.ecommerce.Entities.Order;

import java.sql.Date;
import java.util.List;

public interface OrderService extends BaseService<Order, Long> {

    OrderDTO create(OrderDTO orderDTO);

    void deleteOrderById(Long order_id);

    void updateOrderStatus(Long order_id);

    Long getLastInsertedOrderId();

    List<OrderWithDetailsReducedDTO> getOrdersByCustomerId(Long customer_id);

    OrderAloneDTO getOrder(Long order_id);
}
