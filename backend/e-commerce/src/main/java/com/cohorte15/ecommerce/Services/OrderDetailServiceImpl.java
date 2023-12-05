package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.OrderDetailDTO;
import com.cohorte15.ecommerce.Entities.OrderDetail;
import com.cohorte15.ecommerce.Repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderDetailServiceImpl extends BaseServiceImpl<OrderDetail, Long> implements OrderDetailService {

    @Autowired
    private final OrderDetailRepository orderDetailRepository;

    public OrderDetailServiceImpl(OrderDetailRepository orderDetailRepository) {
        super(orderDetailRepository);
        this.orderDetailRepository = orderDetailRepository;
    }

    @Override
    public void saveOrderDetail(int product_quantity, int price, Long order_id, Long product_id) {
        orderDetailRepository.saveOrderDetail(product_quantity, price, order_id, product_id);
    }

    @Override
    public List<OrderDetailDTO> getOrderDetailsByOrderId(Long order_id) {
        List<Object[]> orderDetails = orderDetailRepository.getOrderDetailsByOrderId(order_id);

        List<OrderDetailDTO> orderDetailsDTO = new ArrayList<>();

        for (int i = 0; i < orderDetails.size(); i++) {
            OrderDetailDTO orderDetailDTO = new OrderDetailDTO();

            orderDetailDTO.setId((Long) orderDetails.get(i)[0]);
            orderDetailDTO.setPrice((int) orderDetails.get(i)[1]);
            orderDetailDTO.setProduct_quantity((int) orderDetails.get(i)[2]);
            orderDetailDTO.setProduct_id((Long) orderDetails.get(i)[3]);

            orderDetailsDTO.add(orderDetailDTO);
        }
        return orderDetailsDTO;
    }
}