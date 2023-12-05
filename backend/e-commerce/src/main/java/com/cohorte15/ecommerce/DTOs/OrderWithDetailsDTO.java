package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderWithDetailsDTO {

    private Long order_id;

    private List<OrderDetailWithProductDTO> orderDetails;
}
