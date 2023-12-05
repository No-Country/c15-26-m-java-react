package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.ProductDTO;
import com.cohorte15.ecommerce.Entities.Product;

import java.util.List;

public interface ProductService extends BaseService<Product, Long> {

    List<ProductDTO> getAllProducts();

    ProductDTO getProduct(Long id);

    List<ProductDTO> getProductsByCategory(Long id);

    List<Object[]> getImages(Long id);

}
