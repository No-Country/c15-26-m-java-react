package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class ResponseOrderDTO {

    private Long order_id;

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

    private Date expiration_date;

    private String state;
}
