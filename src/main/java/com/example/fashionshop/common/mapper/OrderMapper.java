package com.example.fashionshop.common.mapper;

import com.example.fashionshop.modules.order.dto.OrderItemResponse;
import com.example.fashionshop.modules.order.dto.OrderResponse;
import com.example.fashionshop.modules.order.entity.Order;
import com.example.fashionshop.modules.order.entity.OrderItem;

import java.util.List;

public final class OrderMapper {

    private OrderMapper() {
    }

    public static OrderResponse toResponse(Order order, List<OrderItem> items) {
        return OrderResponse.builder()
                .id(order.getId())
                .status(order.getStatus())
                .totalPrice(order.getTotalPrice())
                .receiverName(order.getReceiverName())
                .phone(order.getPhone())
                .shippingAddress(order.getShippingAddress())
                .createdAt(order.getCreatedAt())
                .items(items.stream().map(OrderMapper::toItemResponse).toList())
                .build();
    }

    private static OrderItemResponse toItemResponse(OrderItem item) {
        return OrderItemResponse.builder()
                .productId(item.getProduct().getId())
                .productName(item.getProduct().getName())
                .quantity(item.getQuantity())
                .price(item.getPrice())
                .build();
    }
}
