package com.example.fashionshop.common.mapper;

import com.example.fashionshop.modules.product.dto.ProductResponse;
import com.example.fashionshop.modules.product.entity.Product;

public final class ProductMapper {

    private ProductMapper() {
    }

    public static ProductResponse toResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .categoryId(product.getCategory().getId())
                .categoryName(product.getCategory().getName())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .imageUrl(product.getImageUrl())
                .stockQuantity(product.getStockQuantity())
                .isActive(product.getIsActive())
                .build();
    }
}
