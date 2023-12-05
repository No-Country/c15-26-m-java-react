package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class ProductReduceDTO {

    private String name;

    private String brand;

    private String model;
}
