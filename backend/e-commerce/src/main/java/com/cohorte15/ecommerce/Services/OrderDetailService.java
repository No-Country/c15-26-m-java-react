package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.OrderDetailDTO;
import com.cohorte15.ecommerce.Entities.OrderDetail;

import java.util.List;

public interface OrderDetailService extends BaseService<OrderDetail, Long>{

    void saveOrderDetail(int product_quantity, int price, Long order_id, Long product_id);

    List<OrderDetailDTO> getOrderDetailsByOrderId(Long order_id);
}
