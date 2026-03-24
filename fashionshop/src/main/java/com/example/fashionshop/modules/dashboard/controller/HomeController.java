package com.example.fashionshop.modules.dashboard.controller;

import com.example.fashionshop.common.response.ApiResponse;
import com.example.fashionshop.modules.category.service.CategoryService;
import com.example.fashionshop.modules.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/home")
@RequiredArgsConstructor
public class HomeController {

    private final CategoryService categoryService;
    private final ProductService productService;

    @GetMapping
    public ApiResponse<Map<String, Object>> home(@RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "8") int size) {
        Map<String, Object> data = Map.of(
                "categories", categoryService.getAll(),
                "featuredProducts", productService.getProducts(page, size, null)
        );
        return ApiResponse.success("Homepage data fetched successfully", data);
    }
}
