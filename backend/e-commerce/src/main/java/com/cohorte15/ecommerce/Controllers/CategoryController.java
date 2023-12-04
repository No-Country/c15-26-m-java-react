package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.Entities.Category;
import com.cohorte15.ecommerce.Services.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/category")
public class CategoryController extends BaseControllerImpl<Category, CategoryServiceImpl> {

    @Autowired
    private CategoryServiceImpl categoryService;

    @GetMapping("")
    public ResponseEntity<?> getAllCategories() {
        try {
            return ResponseEntity.status(200).body(categoryService.getAllCategories());
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

}
