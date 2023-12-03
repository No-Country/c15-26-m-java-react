package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderDTO {

    private Long order_id;

    private String address;

    private String city;

    private boolean completed;

    private String country;

    private String credit_card_number;

    private String credit_card_type;

    private int customer_id;

    private String cvv;

    private Date order_date;

    private Date shipment_date;

    private String state;

    private String zip_code;
}
