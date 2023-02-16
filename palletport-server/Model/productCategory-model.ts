import { pool } from "../db.js";

class ProductCategoryModel {
    async create(productCategory: any) {
        const { name, description, image, shortName } = productCategory;
        const databaseQuery = 'INSERT INTO product_category (name, description, image, shortname) values ($1, $2, $3, $4) RETURNING *';
        const newProductCategory = await pool.query(databaseQuery, [ name, description, image, shortName ]);
        return newProductCategory;
    };

    async get(id: any) {
        const databaseQuery = 'SELECT * FROM product_category where id = $1';
        const productCategory = await pool.query(databaseQuery, [ id ]);
        return productCategory;
    };

    async update(id: number, productCategory: any) {
        const { name, description, image, shortName } = productCategory;
        const databaseQuery = 'UPDATE product_category set name = $1, description = $2, image = $3, shortname = $4 where id = $5 RETURNING *';
        const updatedProductCategory = await pool.query(databaseQuery, [ name, description, image, shortName, id ]);
        return updatedProductCategory;
    };

    async delete(id: number) {
        const databaseQuery = 'DELETE FROM product_category where id = $1';
        const productCategory = await pool.query(databaseQuery, [ id ]);
        return productCategory;
    };
}

export default new ProductCategoryModel();