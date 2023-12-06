package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.DTOs.OrderDTO;
import com.cohorte15.ecommerce.Entities.Order;
import com.cohorte15.ecommerce.Services.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/order")
public class OrderController extends BaseControllerImpl<Order, OrderServiceImpl>{

    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrder(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(orderService.getOrder(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/customer/{customer_id}")
    public ResponseEntity<?> getOrdersByCustomerId(@PathVariable("customer_id") Long customer_id) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByCustomerId(customer_id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderDTO orderDTO) {
        try {
            return ResponseEntity.ok(orderService.create(orderDTO));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOrderById(@PathVariable("id") Long id) {
        try {
            orderService.deleteOrderById(id);
            return ResponseEntity.ok("Order id: " + id + " deleted");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/updatePending/{id}")
    public ResponseEntity<?> updateOrderStatus(@PathVariable("id") Long id) {
        try {
            orderService.updateOrderStatus(id);
            return ResponseEntity.ok("Order id: " + id + " updated to pending = false");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
