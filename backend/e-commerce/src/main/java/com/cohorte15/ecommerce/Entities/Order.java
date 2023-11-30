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

    @Column(name =  "date", length = 50, nullable = false)
    private Date date;

    @Column(name =  "completed", length = 50, nullable = false)
    private boolean completed;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    @Builder.Default
    private Customer customer = new Customer();

}
