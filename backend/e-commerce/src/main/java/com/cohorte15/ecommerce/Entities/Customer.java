package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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

    @Column(name =  "surname", length = 50, nullable = false)
    private String surname;

    @Column(name =  "address", length = 50, nullable = true)
    private String address;

    @Column(name =  "email", length = 50, nullable = false)
    private String email;

    @Column(name =  "password", length = 50, nullable = false)
    private String password;

    @Column(name =  "phone", length = 50, nullable = false)
    private long phone;

}
