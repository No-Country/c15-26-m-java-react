package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends BaseRepository<Product, Long> {

    @Query(value = "SELECT \n" +
            "    p.id AS product_id, \n" +
            "    p.product_name AS name, \n" +
            "    c.category_name AS category, \n" +
            "    b.brand_name AS brand, \n" +
            "    p.model, \n" +
            "    p.price, \n" +
            "    p.discount, \n" +
            "    p.description \n" +
            "FROM \n" +
            "    product p \n" +
            "    INNER JOIN brand b ON p.brand_id = b.id \n" +
            "    INNER JOIN category c ON p.category_id = c.id\n" +
            "ORDER BY \n" +
            "    p.discount DESC\n" +
            "LIMIT 8;\n", nativeQuery = true)
    List<Object[]> getAllProducts();

    @Query(value = "SELECT \n" +
            "    p.id AS product_id, \n" +
            "    p.product_name AS name, \n" +
            "    c.category_name AS category, \n" +
            "    b.brand_name AS brand, \n" +
            "    p.model, \n" +
            "    p.price, \n" +
            "    p.discount, \n" +
            "    p.description \n" +
            "FROM \n" +
            "    product p \n" +
            "    INNER JOIN brand b ON p.brand_id = b.id \n" +
            "    INNER JOIN category c ON p.category_id = c.id\n" +
            "WHERE\n" +
            "    p.id = :id ;", nativeQuery = true)
    List<Object[]> getProduct(Long id);

    @Query(value = "SELECT \n" +
            "    p.id AS product_id, \n" +
            "    p.product_name AS name, \n" +
            "    c.category_name AS category, \n" +
            "    b.brand_name AS brand, \n" +
            "    p.model, \n" +
            "    p.price, \n" +
            "    p.discount, \n" +
            "    p.description \n" +
            "FROM \n" +
            "    product p \n" +
            "    INNER JOIN brand b ON p.brand_id = b.id \n" +
            "    INNER JOIN category c ON p.category_id = c.id\n" +
            "WHERE\n" +
            "    p.category_id = :id ;", nativeQuery = true)
    List<Object[]> getProductsByCategory(Long id);


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

    // Get products by brand id
    @Query(value = "SELECT \n" +
            "    p.id AS product_id, \n" +
            "    p.product_name AS name, \n" +
            "    c.category_name AS category, \n" +
            "    b.brand_name AS brand, \n" +
            "    p.model, \n" +
            "    p.price, \n" +
            "    p.discount, \n" +
            "    p.description \n" +
            "FROM \n" +
            "    product p \n" +
            "    INNER JOIN brand b ON p.brand_id = b.id \n" +
            "    INNER JOIN category c ON p.category_id = c.id\n" +
            "WHERE\n" +
            "    p.brand_id = :id ;", nativeQuery = true)
    List<Object[]> getProductsByBrandId(Long id);

    // Get products by brand name
    @Query(value = "SELECT \n" +
            "    p.id AS product_id, \n" +
            "    p.product_name AS name, \n" +
            "    c.category_name AS category, \n" +
            "    b.brand_name AS brand, \n" +
            "    p.model, \n" +
            "    p.price, \n" +
            "    p.discount, \n" +
            "    p.description \n" +
            "FROM \n" +
            "    product p \n" +
            "    INNER JOIN brand b ON p.brand_id = b.id \n" +
            "    INNER JOIN category c ON p.category_id = c.id\n" +
            "WHERE\n" +
            "    b.brand_name LIKE :name ;", nativeQuery = true)
    List<Object[]> getProductsByBrandName(String name);

}
