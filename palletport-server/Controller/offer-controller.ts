class OfferController {
    async createOffer(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async getOffer(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async updateOffer(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async deleteOffer(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async createOfferImage(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };
}

export default new OfferController();