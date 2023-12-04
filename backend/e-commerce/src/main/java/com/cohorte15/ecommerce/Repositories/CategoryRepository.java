package com.cohorte15.ecommerce.Repositories;

import com.cohorte15.ecommerce.Entities.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends BaseRepository<Category, Long>{

    @Query(value = "SELECT * FROM category", nativeQuery = true)
    List<Object[]> getAllCategories();
}
