package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends BaseRepository<Product, Long> {

    @Query(value = "SELECT p.id AS product_id, p.product_name AS name, c.category_name AS category, b.brand_name AS brand, p.model, p.price, p.discount, p.description FROM product p INNER JOIN brand b ON p.brand_id = b.id INNER JOIN category c ON p.category_id = c.id", nativeQuery = true)
    List<Object[]> getAllProducts();


    // Get the images of a product
    @Query(value = "SELECT\n" +
            "    i.id AS image_id,\n" +
            "    i.url AS image_url\n" +
            "FROM\n" +
            "    product p\n" +
            "    INNER JOIN image i ON p.id = i.product_id\n" +
            "WHERE\n" +
            "    p.id = :id ;", nativeQuery = true)
    List<Object[]> getImages(Long id);
}
