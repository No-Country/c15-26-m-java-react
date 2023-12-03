package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Order;

import java.sql.Date;

public interface OrderService extends BaseService<Order, Long> {

    void create(boolean completed, Date order_date, int customer_id, String address, String city, String country, String credit_card_number, String credit_card_type, String cvv, Date shipment_date, String state, String zip_code);

    Long getLastInsertedOrderId();

    Long[] getOrdersIdByCustomerId(Long customer_id);
}
