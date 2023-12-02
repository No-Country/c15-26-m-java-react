package com.cohorte15.ecommerce.DTOs;

import com.cohorte15.ecommerce.Entities.Image;
import lombok.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class ProductDTO {

    private Long id;

    private String name;

    private String category;

    private String brand;

    private String model;

    private int price;

    private double discount;

    private String description;

    // Array of strings for the images
    private String[] images;
}
