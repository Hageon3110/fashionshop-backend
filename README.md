# FashionShop Backend

FashionShop is a modular ecommerce backend built with Java Spring Boot 3 for a Software Engineering course project.

## Tech Stack
- Java 17
- Spring Boot 3
- Spring Web
- Spring Data JPA
- Spring Security + JWT
- Jakarta Validation
- Lombok
- Maven
- MySQL

## Package Structure
```text
com.example.fashionshop
├── common
├── config
├── security
└── modules
    ├── auth
    ├── user
    ├── category
    ├── product
    ├── cart
    ├── wishlist
    ├── order
    ├── payment
    ├── invoice
    ├── notification
    └── dashboard
```

## Database Setup
1. Create database:
```sql
CREATE DATABASE ecommerce_db;
```
2. Update credentials in `src/main/resources/application.properties`.
3. Set `spring.jpa.hibernate.ddl-auto=update` for auto-creation, or `none` if importing SQL dump.

## Import SQL Dump (Optional)
```bash
mysql -u root -p ecommerce_db < your_dump.sql
```

## Run Project
```bash
./mvnw spring-boot:run
```

## Default Roles
- CUSTOMER
- STAFF
- ADMIN

## Main API Groups
- `/api/auth/*`
- `/api/users/*`
- `/api/admin/users/*`
- `/api/categories/*`
- `/api/products/*`
- `/api/cart/*`
- `/api/wishlist/*`
- `/api/orders/*`
- `/api/payments/*`
- `/api/invoices/*`
- `/api/dashboard`
- `/api/home`

## Notes
- API responses follow `{ success, message, data }` format.
- Passwords are encoded with BCrypt.
- JWT authentication is stateless.
