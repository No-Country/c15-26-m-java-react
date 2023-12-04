package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Category;

import java.util.List;

public interface CategoryService extends BaseService<Category, Long> {

    List<Category> getAllCategories() throws Exception;
}
