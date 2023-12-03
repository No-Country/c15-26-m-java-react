package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class SaveOrderDetailDTO {

    private Long order_id;

    private OrderDetailDTO[] order_details;

}
