package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Product;
import com.cohorte15.ecommerce.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl extends BaseServiceImpl<Product, Long> implements ProductService {

    @Autowired
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        super(productRepository);
        this.productRepository = productRepository;
    }

    @Override
    public List<Object[]> getAllProducts() {
        return productRepository.getAllProducts();
    }

    @Override
    public List<Object[]> getImages(Long id) {
        return productRepository.getImages(id);
    }

}
