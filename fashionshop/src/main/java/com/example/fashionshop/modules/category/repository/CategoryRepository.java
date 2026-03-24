package com.example.fashionshop.modules.category.repository;

import com.example.fashionshop.modules.category.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
