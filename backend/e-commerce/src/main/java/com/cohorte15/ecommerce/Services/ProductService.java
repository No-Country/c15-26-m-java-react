package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Product;

import java.util.List;

public interface ProductService extends BaseService<Product, Long> {

    List<Object[]> getAllProducts();

    List<Object[]> getImages(Long id);

}
