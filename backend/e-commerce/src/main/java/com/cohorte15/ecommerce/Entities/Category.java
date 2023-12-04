package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
@Table(name = "category")
public class Category extends BaseEntidad {

    @Column(name =  "category_name", length = 50, nullable = false)
    private String category_name;

}
