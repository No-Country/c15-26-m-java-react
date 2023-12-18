package com.cohorte15.ecommerce.DTOs;

import com.cohorte15.ecommerce.Entities.Customer;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderDTO {

    private String address;

    private String city;

    private boolean pending;

    private String card_number;

    private String card_type;

    private String card_owner;

    private int owner_dni;

    private Long customer_id;

    private String cvv;

    private Date order_date;

    private String expiration_date;

    private String state;

}
