package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
@Table(name = "customer")
public class Customer extends BaseEntidad {

    @Column(name =  "name", length = 50, nullable = false)
    private String name;

    @Column(name =  "phone", length = 50, nullable = false)
    private long phone;

    @Column(name =  "email", length = 50, nullable = false)
    private String email;

    @Column(name =  "address", length = 50, nullable = false)
    private String address;

    @Column(name =  "city", length = 50, nullable = false)
    private String city;

    @Column(name =  "state", length = 50, nullable = false)
    private String state;

    @Column(name =  "password", length = 50, nullable = false)
    private String password;

    @Column(name =  "confirm", length = 50, nullable = false)
    private String confirm;

}
