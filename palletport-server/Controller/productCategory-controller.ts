import { pool } from "../db.js";

class ProductCategoryController {
    async createProductCategory(request: any, response: any) {
        // const { name, description, image, shortName } = request.body;
        // const newProductCategory = await pool.query('INSERT INTO product_category (name, description, image, shortname) values ($1, $2, $3, $4) RETURNING *', [ name, description, image, shortName ]);
        // response.json(newProductCategory);
    };

    async getProductCategory(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async updateProductCategory(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async deleteProductCategory(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };
}

export default new ProductCategoryController();