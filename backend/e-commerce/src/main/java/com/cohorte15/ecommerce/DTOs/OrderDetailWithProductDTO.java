package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderDetailWithProductDTO {

    private Long order_detail_id;

    private int product_quantity;

    private int price;

    private ProductDTO product;
}
