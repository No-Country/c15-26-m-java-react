package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.DTOs.ProductDTO;
import com.cohorte15.ecommerce.DTOs.ProductReduceDTO;
import com.cohorte15.ecommerce.Entities.Product;
import com.cohorte15.ecommerce.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl extends BaseServiceImpl<Product, Long> implements ProductService {

    @Autowired
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        super(productRepository);
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductDTO> getAllProducts() {

        List<Object[]> productList = productRepository.getAllProducts();

        List<ProductDTO> productDTOList = productList.stream()
                .map(this::mapToObject)
                .collect(Collectors.toList());

        for (int i = 0; i < productList.size(); i++) {
            Long productId = (Long) productList.get(i)[0];
            List<Object[]> imageRows = productRepository.getImages(productId);
            List<String> imageUrls = imageRows.stream()
                    .map(row -> row[0].toString())
                    .collect(Collectors.toList());
            productDTOList.get(i).setImages(imageUrls.toArray(new String[0]));
        }

        return productDTOList;
    }

    private ProductDTO mapToObject(Object[] result) {
        return ProductDTO.builder()
                .id((Long) result[0])
                .name((String) result[1])
                .category((String) result[2])
                .brand((String) result[3])
                .model((String) result[4])
                .price((int) result[5])
                .discount((double) result[6])
                .description((String) result[7])
                .images(new String[0])  // Inicialmente, un array vacío
                .build();
    }

    @Override
    public ProductReduceDTO getProduct(Long id) {

        List<Object[]> productList = productRepository.getProduct(id);

        ProductReduceDTO productReduceDTO = new ProductReduceDTO();

        productReduceDTO.setName((String) productList.get(0)[1]);
        productReduceDTO.setBrand((String) productList.get(0)[3]);
        productReduceDTO.setModel((String) productList.get(0)[4]);

        return productReduceDTO;
    }




    @Override
    public List<ProductDTO> getProductsByCategory(Long id) {

        List<Object[]> productList = productRepository.getProductsByCategory(id);

        List<ProductDTO> productDTOList = productList.stream()
                .map(this::mapToObject)
                .collect(Collectors.toList());

        for (int i = 0; i < productList.size(); i++) {
            Long productId = (Long) productList.get(i)[0];
            List<Object[]> imageRows = productRepository.getImages(productId);
            List<String> imageUrls = imageRows.stream()
                    .map(row -> row[0].toString())
                    .collect(Collectors.toList());
            productDTOList.get(i).setImages(imageUrls.toArray(new String[0]));
        }

        return productDTOList;
    }

    @Override
    public List<Object[]> getImages(Long id) {
        return productRepository.getImages(id);
    }

    @Override
    public List<ProductDTO> getProductsByBrandId(Long id) {

        List<Object[]> productList = productRepository.getProductsByBrandId(id);

        List<ProductDTO> productDTOList = productList.stream()
                .map(this::mapToObject)
                .collect(Collectors.toList());

        for (int i = 0; i < productList.size(); i++) {
            Long productId = (Long) productList.get(i)[0];
            List<Object[]> imageRows = productRepository.getImages(productId);
            List<String> imageUrls = imageRows.stream()
                    .map(row -> row[0].toString())
                    .collect(Collectors.toList());
            productDTOList.get(i).setImages(imageUrls.toArray(new String[0]));
        }

        return productDTOList;
    }

    @Override
    public List<ProductDTO> getProductsByBrandName(String name) {

        List<Object[]> productList = productRepository.getProductsByBrandName(name);

        List<ProductDTO> productDTOList = productList.stream()
                .map(this::mapToObject)
                .collect(Collectors.toList());

        for (int i = 0; i < productList.size(); i++) {
            Long productId = (Long) productList.get(i)[0];
            List<Object[]> imageRows = productRepository.getImages(productId);
            List<String> imageUrls = imageRows.stream()
                    .map(row -> row[0].toString())
                    .collect(Collectors.toList());
            productDTOList.get(i).setImages(imageUrls.toArray(new String[0]));
        }

        return productDTOList;
    }

}
