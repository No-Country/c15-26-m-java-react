package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.sql.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderReducedDTO {

    private Long order_id;

    private boolean pending;

    private Date order_date;

    private Date shipment_date;
}
