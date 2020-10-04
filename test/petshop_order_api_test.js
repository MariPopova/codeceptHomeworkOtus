let assert = require('assert');

Feature('Create, find and delete order in petshop');

Scenario('post new order', async (I) => {
    const body = {
        "id": 777,
        "petId": 77,
        "quantity": 7,
        "shipDate": "2020-10-04T14:59:08.810Z",
        "status": "placed",
        "complete": true
    };
    let r = await I.sendPostRequest( `https://petstore.swagger.io/v2/store/order`, body);
    assert.equal(r.status, 200);
});

Scenario('get order', async (I) => {
    const orderId = 777;
    let r = await I.sendGetRequest( `https://petstore.swagger.io/v2/store/order/${orderId}`);
    assert.equal(r.status, 200);
    assert.equal(r.data.petId, 77);
    assert.equal(r.data.status, "placed");
});

Scenario('delete order', async (I) => {
    const orderId = 777;
    let r = await I.sendDeleteRequest( `https://petstore.swagger.io/v2/store/order/${orderId}`);
    assert.equal(r.status, 200);
});

Scenario('get order', async (I) => {
    const orderId = 777;
    let r = await I.sendGetRequest( `https://petstore.swagger.io/v2/store/order/${orderId}`);
    assert.equal(r.status, 404);
    assert.equal(r.data.message, 'Order not found');
});