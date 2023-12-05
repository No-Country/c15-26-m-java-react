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

    @Column(name =  "country", length = 50, nullable = false)
    private String country;

    @Column(name =  "credit_card_number", length = 50, nullable = false)
    private String credit_card_number;

    @Column(name =  "credit_card_type", length = 50, nullable = false)
    private String credit_card_type;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    @Builder.Default
    private Customer customer = new Customer();

    @Column(name =  "cvv", length = 50, nullable = false)
    private String cvv;

    @Column(name =  "order_date", length = 50, nullable = false)
    private Date order_date;

    @Column(name =  "shipment_date", length = 50, nullable = false)
    private Date shipment_date;

    @Column(name =  "state", length = 50, nullable = false)
    private String state;

    @Column(name =  "zip_code", length = 50, nullable = false)
    private String zip_code;

}
