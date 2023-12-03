package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderDetailDTO {

    private Long id;

    private int product_quantity;

    private int price;

    private Long product_id;
}
