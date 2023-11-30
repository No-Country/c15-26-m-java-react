package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "image")
public class Image extends BaseEntidad{

    @Column(name =  "url", length = 50, nullable = false)
    private String url;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    @Builder.Default
    private Product product = new Product();
}
