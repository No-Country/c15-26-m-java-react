package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)

public class CustomerReducedDTO {

    private Long customer_id;

    private String name;

    private String email;
}
