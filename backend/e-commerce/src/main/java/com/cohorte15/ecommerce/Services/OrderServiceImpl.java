package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.*;
import com.cohorte15.ecommerce.Entities.Order;
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
    public OrderDTO create(OrderDTO orderDTO) {

            boolean pending = orderDTO.isPending();
            Date order_date = orderDTO.getOrder_date();
            int customer_id = orderDTO.getCustomer_id();
            String address = orderDTO.getAddress();
            String city = orderDTO.getCity();
            String credit_card_number = orderDTO.getCredit_card_number();
            String credit_card_type = orderDTO.getCredit_card_type();
            String cvv = orderDTO.getCvv();
            Date shipment_date = orderDTO.getShipment_date();
            String state = orderDTO.getState();
            String zip_code = orderDTO.getZip_code();

            orderRepository.create(
                    pending,
                    order_date,
                    customer_id,
                    address,
                    city,
                    credit_card_number,
                    credit_card_type,
                    cvv,
                    shipment_date,
                    state,
                    zip_code);

            OrderDTO responseOrderDTO = OrderDTO.builder()
                    .order_id(orderRepository.getLastInsertedOrderId())
                    .address(address)
                    .city(city)
                    .pending(pending)
                    .credit_card_number(credit_card_number)
                    .credit_card_type(credit_card_type)
                    .customer_id(customer_id)
                    .cvv(cvv)
                    .order_date(order_date)
                    .shipment_date(shipment_date)
                    .state(state)
                    .zip_code(zip_code)
                    .build();

            return responseOrderDTO;
       }

    @Override
    public void deleteOrderById(Long order_id) {
        orderRepository.deleteOrderById(order_id);
    }

    @Override
    public void updateOrderStatus(Long order_id) {
        orderRepository.updateOrderStatus(order_id);
    }

    @Override
    public Long getLastInsertedOrderId() {
        return orderRepository.getLastInsertedOrderId();
    }

    @Override
    public List<OrderWithDetailsReducedDTO> getOrdersByCustomerId(Long customer_id) {

        List<OrderWithDetailsReducedDTO> ordersWithDetailsDTO = new ArrayList<>();

        for (int i = 0; i < orderRepository.getOrdersIdByCustomerId(customer_id).length; i++) {

            OrderWithDetailsReducedDTO orderWithDetailDTO = new OrderWithDetailsReducedDTO();

            Long order_id = orderRepository.getOrdersIdByCustomerId(customer_id)[i];

            OrderReducedDTO orderReducedDTO = new OrderReducedDTO();

            orderReducedDTO.setOrder_id(order_id);

            List<Object[]> order = orderRepository.getOrderById(order_id);

            orderReducedDTO.setPending(Boolean.parseBoolean(order.get(0)[1].toString()));
            orderReducedDTO.setOrder_date(Date.valueOf(order.get(0)[2].toString()));
            orderReducedDTO.setShipment_date(Date.valueOf(order.get(0)[7].toString()));

            orderWithDetailDTO.setOrder(orderReducedDTO);

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
        orderAloneDTO.setShipment_date(Date.valueOf(order.get(0)[7].toString()));
        orderAloneDTO.setState(order.get(0)[8].toString());
        orderAloneDTO.setZip_code(order.get(0)[9].toString());

        return orderAloneDTO;
    }

}
