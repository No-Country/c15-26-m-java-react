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
            boolean pending = orderDTO.isPending();
            Date order_date = orderDTO.getOrder_date();
            int customer_id = orderDTO.getCustomer_id();
            String address = orderDTO.getAddress();
            String city = orderDTO.getCity();
            String country = orderDTO.getCountry();
            String credit_card_number = orderDTO.getCredit_card_number();
            String credit_card_type = orderDTO.getCredit_card_type();
            String cvv = orderDTO.getCvv();
            Date shipment_date = orderDTO.getShipment_date();
            String state = orderDTO.getState();
            String zip_code = orderDTO.getZip_code();

            orderService.create(pending, order_date, customer_id, address, city, country, credit_card_number, credit_card_type, cvv, shipment_date, state, zip_code);

            OrderDTO responseOrderDTO = OrderDTO.builder()
                    .order_id(orderService.getLastInsertedOrderId())
                    .address(address)
                    .city(city)
                    .pending(pending)
                    .country(country)
                    .credit_card_number(credit_card_number)
                    .credit_card_type(credit_card_type)
                    .customer_id(customer_id)
                    .cvv(cvv)
                    .order_date(order_date)
                    .shipment_date(shipment_date)
                    .state(state)
                    .zip_code(zip_code)
                    .build();

            return ResponseEntity.ok(responseOrderDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"error\":\"Error. Please try again later.\"}");
        }
    }
}
