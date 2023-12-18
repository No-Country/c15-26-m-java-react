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
    public ResponseOrderDTO create(OrderDTO orderDTO) {

            Date order_date = orderDTO.getOrder_date();
            boolean pending = orderDTO.isPending();
            Long customer_id = orderDTO.getCustomer_id();
            String address = orderDTO.getAddress();
            String city = orderDTO.getCity();
            String state = orderDTO.getState();
            String card_owner = orderDTO.getCard_owner();
            int owner_dni = orderDTO.getOwner_dni();
            String card_type = orderDTO.getCard_type();
            String card_number = orderDTO.getCard_number();
            String expiration_date = orderDTO.getExpiration_date();
            String cvv = orderDTO.getCvv();

            orderRepository.create(
                    order_date,
                    pending,
                    customer_id,
                    address,
                    city,
                    state,
                    card_owner,
                    owner_dni,
                    card_type,
                    card_number,
                    expiration_date,
                    cvv
            );

            ResponseOrderDTO responseOrderDTO = ResponseOrderDTO.builder()
                    .order_id(orderRepository.getLastInsertedOrderId())
                    .order_date(order_date)
                    .pending(pending)
                    .customer_id(customer_id)
                    .address(address)
                    .city(city)
                    .state(state)
                    .card_owner(card_owner)
                    .owner_dni(owner_dni)
                    .card_type(card_type)
                    .card_number(card_number)
                    .expiration_date(expiration_date)
                    .cvv(cvv)
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
