package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "brand")
public class Brand extends BaseEntidad{

    @Column(name = "brand_name", length = 50, nullable = false)
    private String brand_name;

}
