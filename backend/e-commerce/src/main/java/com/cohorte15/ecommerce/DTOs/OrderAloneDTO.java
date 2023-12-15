package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderAloneDTO {

    private Long order_id;

    private String address;

    private String city;

    private boolean pending;

    private int customer_id;

    private Date order_date;

    private Date shipment_date;

    private String state;

    private String zip_code;

}
