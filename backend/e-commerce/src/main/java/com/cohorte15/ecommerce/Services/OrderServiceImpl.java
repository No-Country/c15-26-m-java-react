package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Order;
import com.cohorte15.ecommerce.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class OrderServiceImpl extends BaseServiceImpl<Order, Long> implements OrderService {

    @Autowired
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        super(orderRepository);
        this.orderRepository = orderRepository;
    }

    @Override
    public void create(boolean completed, Date order_date, int customer_id, String address, String city, String country, String credit_card_number, String credit_card_type, String cvv, Date shipment_date, String state, String zip_code) {
        orderRepository.create(completed, order_date, customer_id, address, city, country, credit_card_number, credit_card_type, cvv, shipment_date, state, zip_code);
    }

    @Override
    public Long getLastInsertedOrderId() {
        return orderRepository.getLastInsertedCustomerId();
    }

    @Override
    public Long[] getOrdersIdByCustomerId(Long customer_id) {
        return orderRepository.getOrdersIdByCustomerId(customer_id);
    }

}
