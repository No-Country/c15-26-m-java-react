package com.cohorte15.ecommerce.DTOs;

import lombok.*;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class OrderWithDetailsDTO {

    private OrderAloneDTO order;

    private List<OrderDetailWithProductDTO> order_details;
}
