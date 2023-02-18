CREATE TYPE role AS ENUM ('BUYER', 'SELLER', 'ADMIN', 'SYSTEM', 'LOGISTIC');

CREATE TYPE material AS ENUM ('METAL', 'PLASTIC', 'WOOD', 'CARDBOARD');

CREATE TYPE condition AS ENUM ('NEW', 'USED 1 CATEGORY', 'USED 2 CATEGORY', 'USED 3 CATEGORY', 'BROKEN');

CREATE TYPE payment_type AS ENUM ('CASH', 'INVOICE', 'CARD');

CREATE TYPE delivery_type AS ENUM ('SELFPICKUP', 'BUS', 'TRUCK', 'COURIER');

CREATE TYPE offer_status AS ENUM ('ACTIVE', 'MODERATION', 'CLOSED');

CREATE TYPE order_status AS ENUM ('CREATED', 'MODERATION', 'PENDING', 'ACCEPTED', 'SENDED', 'DELIVERED', 'RETURNED', 'CLOSED');

create TABLE product_category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    shortName VARCHAR(255)
);

create TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    material material,
    condition condition,
    description VARCHAR(255),
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    shortName VARCHAR(255),
    length FLOAT,
    width FLOAT,
    height FLOAT,
    maxLoad INTEGER,
    category_id INTEGER
    FOREIGN KEY (category_id) REFERENCES product_category (id)
);

create TABLE coordinates(
    id SERIAL PRIMARY KEY,
    lat FLOAT,
    lon FLOAT
);

create TABLE address(
    id SERIAL PRIMARY KEY,
    street VARCHAR(255),
    city VARCHAR(255),
    zipCode VARCHAR(255),
    state VARCHAR(255),
    countryCode VARCHAR(255),
    coordinates_id INTEGER,
    FOREIGN KEY (coordinates_id) REFERENCES coordinates (id)
);

create TABLE delivery(
    id SERIAL PRIMARY KEY,
    deliveryType delivery_type,
    deliveryTimeMin FLOAT,
    deliveryTimeMax FLOAT,
    deliveryPrice FLOAT
);

create TABLE company(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    NIP VARCHAR(255),
    address_id INTEGER,
    IBAN VARCHAR(255),
    paymentDate INTEGER,
    VAT INTEGER,
    email VARCHAR(255),
    phone VARCHAR(255),
    workingHoursMin INTEGER,
    workingHoursMax INTEGER,
    FOREIGN KEY (address_id) REFERENCES address (id)
);

create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    rank FLOAT,
    avatar VARCHAR(255),
    roles role,
    deliveryAddress_id INTEGER,
    paymentAddress_id INTEGER,
    companies_ids INTEGER ARRAY,
    FOREIGN KEY (deliveryAddress_id) REFERENCES address (id),
    FOREIGN KEY (paymentAddress_id) REFERENCES address (id)
);

create TABLE offer(
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    seller_id INTEGER,
    company_id INTEGER,
    price FLOAT,
    quantityMin INTEGER,
    quantityMax INTEGER,
    delivery INTEGER ARRAY,
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    description VARCHAR(255),
    offerStatus offer_status,
    rating FLOAT,
    isTop BIT,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (seller_id) REFERENCES users (id),
    FOREIGN KEY (company_id) REFERENCES company (id)
);

create TABLE cart(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    offers INTEGER ARRAY,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create TABLE orders(
    id SERIAL PRIMARY KEY,
    cart_id INTEGER,
    orderStatus offer_status,
    payment payment_type,
    paymentStatus BIT,
    FOREIGN KEY (cart_id) REFERENCES cart (id)
);