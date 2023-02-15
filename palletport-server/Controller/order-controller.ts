class OrderController {
    async createOrder(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async getOrder(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async updateOrder(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async deleteOrder(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async getSortedOrders(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };
}

export default new OrderController();