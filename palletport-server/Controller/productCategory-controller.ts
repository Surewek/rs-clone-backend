import { pool } from "../db.js";
import productCategoryModel from "../Model/productCategory-model.js";

class ProductCategoryController {
    async createProductCategory(request: any, response: any) {
        const ProductCategory = await productCategoryModel.create(request.body);
        response.json(ProductCategory.rows[0]);
    };

    async getProductCategory(request: any, response: any) {
        const ProductCategory = await productCategoryModel.get(request.params.id);
        response.json(ProductCategory.rows[0]);
    };

    async updateProductCategory(request: any, response: any) {
        const ProductCategory = await productCategoryModel.update(request.params.id, request.body);
        response.json(ProductCategory.rows[0]);
    };

    async deleteProductCategory(request: any, response: any) {
        const ProductCategory = await productCategoryModel.delete(request.params.id);
        response.json(ProductCategory.rows[0]);
    };
}

export default new ProductCategoryController();