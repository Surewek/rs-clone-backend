class ProductController {
    async createProduct(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async getProduct(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async updateProduct(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async deleteProduct(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };
}

export default new ProductController();