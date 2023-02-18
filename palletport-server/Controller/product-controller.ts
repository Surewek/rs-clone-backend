import productModel from "../Model/product-model.js";
import productCategoryModel from "../Model/productCategory-model.js";

class ProductController {
    async createProduct(request: any, response: any) {
        const product = await productModel.create(request.body);
        response.json(product.rows[0]);
    };

    async getProduct(request: any, response: any) {
        const product = await productModel.get(request.params.id);
        const productCategory = await productCategoryModel.get(product.rows[0].category_id);

        product.rows[0].category = productCategory.rows[0];
        delete product.rows[0].category_id;
        response.json(product.rows[0]);
    };

    async updateProduct(request: any, response: any) {
        const product = await productModel.update(request.params.id, request.body);
        const productCategory = await productCategoryModel.get(product.rows[0].category_id);

        product.rows[0].category = productCategory.rows[0];
        delete product.rows[0].category_id;
        response.json(product.rows[0]);
    };

    async deleteProduct(request: any, response: any) {
        const product = await productModel.delete(request.params.id);
        response.json(product.rows[0]);
    };
}

export default new ProductController();