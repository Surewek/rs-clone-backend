import { pool } from "../db.js";

class ProductModel {
    async create(product: any) {
        const { name, material, condition, description, image1, image2, shortName, length, width, height, maxLoad, category } = product;
        const databaseQuery = 'INSERT INTO product (name, material, condition, description, image1, image2, shortname, length, width, height, maxload, category_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
        const categoryId = category.id;
        const newProduct = await pool.query(databaseQuery, [ name, material, condition, description, image1, image2, shortName, length, width, height, maxLoad, categoryId ]);
        return newProduct;
    };

    async get(id: any) {
        const databaseQuery = 'SELECT * FROM product where id = $1';
        const product = await pool.query(databaseQuery, [ id ]);
        return product;
    };

    async update(id: number, product: any) {
        const { name, material, condition, description, image1, image2, shortName, length, width, height, maxLoad, category } = product;
        const databaseQuery = 'UPDATE product set name = $1, material = $2, condition = $3, description = $4, image1 = $5, image2 = $6, shortname = $7, length = $8, width = $9, height = $10, maxload = $11, category_id = $12 where id = $13 RETURNING *';
        const categoryId = category.id;
        const updatedProduct = await pool.query(databaseQuery, [ name, material, condition, description, image1, image2, shortName, length, width, height, maxLoad, categoryId, id ]);
        return updatedProduct;
    };

    async delete(id: number) {
        const databaseQuery = 'DELETE FROM product where id = $1';
        const product = await pool.query(databaseQuery, [ id ]);
        return product;
    };
}

export default new ProductModel();