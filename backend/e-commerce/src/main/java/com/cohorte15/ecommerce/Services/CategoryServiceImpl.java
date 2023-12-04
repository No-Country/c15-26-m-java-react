package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Category;
import com.cohorte15.ecommerce.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl extends BaseServiceImpl<Category, Long> implements CategoryService {

    @Autowired
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        super(categoryRepository);
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> getAllCategories() throws Exception {

        List<Object[]> categories = categoryRepository.getAllCategories();

        List<Category> categoryList = new java.util.ArrayList<>();

        for (Object[] category : categories) {
            Category category1 = new Category();
            category1.setId(Long.parseLong(category[0].toString()));
            category1.setCategory_name(category[1].toString());
            categoryList.add(category1);
        }

        return categoryList;
    }

}
