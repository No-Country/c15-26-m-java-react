package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.OrderAloneDTO;
import com.cohorte15.ecommerce.DTOs.OrderDetailWithProductDTO;
import com.cohorte15.ecommerce.DTOs.OrderWithDetailsDTO;
import com.cohorte15.ecommerce.Entities.Order;
import com.cohorte15.ecommerce.Repositories.OrderDetailRepository;
import com.cohorte15.ecommerce.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl extends BaseServiceImpl<Order, Long> implements OrderService {

    @Autowired
    private final OrderRepository orderRepository;

    @Autowired
    private OrderDetailServiceImpl orderDetailService;

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
    public List<OrderWithDetailsDTO> getOrdersByCustomerId(Long customer_id) {

        List<OrderWithDetailsDTO> ordersWithDetailsDTO = new ArrayList<>();

        for (int i = 0; i < orderRepository.getOrdersIdByCustomerId(customer_id).length; i++) {

            OrderWithDetailsDTO orderWithDetailDTO = new OrderWithDetailsDTO();

            orderWithDetailDTO.setOrder_id(orderRepository.getOrdersIdByCustomerId(customer_id)[i]);

            Long order_id = orderRepository.getOrdersIdByCustomerId(customer_id)[i];

            orderWithDetailDTO.setOrder_details(orderDetailService.getOrderDetailsByOrderIdWithProduct(order_id));

            ordersWithDetailsDTO.add(orderWithDetailDTO);
        }

        return ordersWithDetailsDTO;
    }

    @Override
    public OrderAloneDTO getOrder(Long order_id) {

        List<Object[]> order = orderRepository.getOrderById(order_id);

        OrderAloneDTO orderAloneDTO = new OrderAloneDTO();

        orderAloneDTO.setOrder_id(Long.parseLong(order.get(0)[0].toString()));
        orderAloneDTO.setPending(Boolean.parseBoolean(order.get(0)[1].toString()));
        orderAloneDTO.setOrder_date(Date.valueOf(order.get(0)[2].toString()));
        orderAloneDTO.setCustomer_id(Integer.parseInt(order.get(0)[3].toString()));
        orderAloneDTO.setAddress(order.get(0)[4].toString());
        orderAloneDTO.setCity(order.get(0)[5].toString());
        orderAloneDTO.setCountry(order.get(0)[6].toString());
        orderAloneDTO.setShipment_date(Date.valueOf(order.get(0)[7].toString()));
        orderAloneDTO.setState(order.get(0)[8].toString());
        orderAloneDTO.setZip_code(order.get(0)[9].toString());

        return orderAloneDTO;
    }

}
