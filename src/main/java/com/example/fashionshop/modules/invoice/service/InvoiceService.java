package com.example.fashionshop.modules.invoice.service;

import com.example.fashionshop.modules.invoice.dto.InvoiceResponse;

public interface InvoiceService {
    InvoiceResponse getByOrderId(Integer orderId);

    InvoiceResponse getById(Integer invoiceId);
}
