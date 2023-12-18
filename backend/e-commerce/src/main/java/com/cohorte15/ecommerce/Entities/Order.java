package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "`order`")
public class Order extends BaseEntidad{

    @Column(name =  "address", length = 50, nullable = false)
    private String address;

    @Column(name =  "city", length = 50, nullable = false)
    private String city;

    @Column(name =  "pending", length = 50, nullable = false)
    private boolean pending;

    @Column(name =  "card_number", length = 50, nullable = false)
    private String card_number;

    @Column(name =  "card_type", length = 50, nullable = false)
    private String card_type;

    @Column(name =  "card_owner", length = 50, nullable = false)
    private String card_owner;

    @Column(name =  "owner_dni", length = 50, nullable = false)
    private int owner_dni;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    @Builder.Default
    private Customer customer = new Customer();

    @Column(name =  "cvv", length = 50, nullable = false)
    private String cvv;

    @Column(name =  "order_date", length = 50, nullable = false)
    private Date order_date;

    @Column(name =  "expiration_date", length = 50, nullable = false)
    private String expiration_date;

    @Column(name =  "state", length = 50, nullable = false)
    private String state;

}
