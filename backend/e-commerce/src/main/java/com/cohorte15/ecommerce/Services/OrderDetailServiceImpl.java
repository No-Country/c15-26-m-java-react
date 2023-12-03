package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.OrderDetailDTO;
import com.cohorte15.ecommerce.Entities.OrderDetail;
import com.cohorte15.ecommerce.Repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<Object[]> getOrderDetailsByOrderId(Long order_id) {
        return orderDetailRepository.getOrderDetailsByOrderId(order_id);
    }
}
