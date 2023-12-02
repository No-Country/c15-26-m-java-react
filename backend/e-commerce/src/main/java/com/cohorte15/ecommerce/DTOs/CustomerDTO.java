package com.cohorte15.ecommerce.DTOs;

import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class CustomerDTO {

    private Long id;

    private String name;

    private String surname;

    private String address;

    private String email;

    private long phone;
}
