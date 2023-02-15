class UserController {
    async getUser(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async createUser(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async loginUser(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async registerUser(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async logoutUser(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async getOneUser(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };

    async updateUser(request: any, response: any) {
        const obj = request.body;
        console.log('Curr body: ', obj);
        response.json('OK');
    };

    async deleteUser(request: any, response: any) {
        console.log('Curr request: ', request);
        response.json('OK');
    };
}

export default new UserController();