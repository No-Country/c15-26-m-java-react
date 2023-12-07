package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.ProductDTO;
import com.cohorte15.ecommerce.DTOs.ProductReduceDTO;
import com.cohorte15.ecommerce.Entities.Product;

import java.util.List;

public interface ProductService extends BaseService<Product, Long> {

    List<ProductDTO> getAllProducts();

    List<ProductDTO> getProductsBySearch(String name);

    ProductReduceDTO getProductReduced(Long id);

    ProductDTO getProduct(Long id);

    List<ProductDTO> getProductsByCategory(String id);

    List<Object[]> getImages(Long id);

    List<ProductDTO> getProductsByBrandId(Long id);

    List<ProductDTO> getProductsByBrandName(String name);

}
