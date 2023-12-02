package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class RegisterCustomerDTO {

    private String state;

    private String message;

    private CustomerDTO user;
}
