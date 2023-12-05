package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.DTOs.OrderDetailDTO;
import com.cohorte15.ecommerce.DTOs.SaveOrderDetailDTO;
import com.cohorte15.ecommerce.Services.OrderDetailService;
import com.cohorte15.ecommerce.Services.OrderDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/orderDetail")
public class OrderDetailController {

    @Autowired
    private OrderDetailServiceImpl orderDetailService;

    @GetMapping("/{order_detail_id}")
    public ResponseEntity<?> getOrderDetail(@PathVariable("order_detail_id") Long order_detail_id) {
        try {
            return ResponseEntity.ok(orderDetailService.getOrderDetailById(order_detail_id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/order/{order_id}")
    public ResponseEntity<?> getOrderDetailsByOrderId(@PathVariable("order_id") Long order_id) {
        try {
            return ResponseEntity.ok(orderDetailService.getOrderDetailsByOrderIdWithProduct(order_id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveOrderDetail(@RequestBody SaveOrderDetailDTO saveOrderDetailDTO) {
        try {
            Long order_id = saveOrderDetailDTO.getOrder_id();

            for (int i = 0; i < saveOrderDetailDTO.getOrder_details().length; i++) {

                int product_quantity = saveOrderDetailDTO.getOrder_details()[i].getProduct_quantity();
                int price = saveOrderDetailDTO.getOrder_details()[i].getPrice();
                Long product_id = saveOrderDetailDTO.getOrder_details()[i].getProduct_id();

                orderDetailService.saveOrderDetail(product_quantity, price, order_id, product_id);
            }

            return ResponseEntity.ok("{\"message\":\"OrderDetail saved\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"error\":\"Error. Please try again later.\"}");
        }
    }
}
