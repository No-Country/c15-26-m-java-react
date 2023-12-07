package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.Entities.Product;
import com.cohorte15.ecommerce.Services.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/product")
public class ProductController extends BaseControllerImpl<Product, ProductServiceImpl> {

    @Autowired
    private ProductServiceImpl productService;

    @GetMapping("")
    public ResponseEntity<?> getAllProducts() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProducts());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProduct(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable String id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsByCategory(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/brandId/{id}")
    public ResponseEntity<?> getProductsByBrand(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsByBrandId(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/brandName/{name}")
    public ResponseEntity<?> getProductsByBrand(@PathVariable String name) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsByBrandName(name));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<?> getProductsBySearch(@PathVariable String name) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsBySearch("%" + name + "%"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
