class ProductCategoryController {
    async createProductCategory(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
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