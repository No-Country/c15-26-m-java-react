package com.cohorte15.ecommerce.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "product")
public class Product extends BaseEntidad{

    @Column(name = "product_name", length = 50, nullable = false)
    private String product_name;

    @Column(name = "model", length = 50, nullable = false)
    private String model;

    @Column(name = "price", length = 50, nullable = false)
    private int price;

    @Column(name = "description", length = 255, nullable = false)
    private String description;

    @Column(name = "discount", length = 50, nullable = false)
    private double discount;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    @Builder.Default
    private Brand brand = new Brand();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    @Builder.Default
    private List<Image> image = new ArrayList<>();

    public void addImage(Image image) {
        this.image.add(image);
    }

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @Builder.Default
    private Category category = new Category();
}
