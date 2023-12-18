package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderAloneDTO {

    private Long order_id;

    private Date order_date;

    private boolean pending;

    private String address;

    private String city;

    private String state;

    private CustomerReducedDTO customer;

}
