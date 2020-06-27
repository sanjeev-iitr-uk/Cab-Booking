const app = require('../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe("Endpoint Testing", () => {
    test("Start Ride Endpoint", async () => {
        const { body } = await request.get(`/ride/start?lattitude=19.116046&longitude=72.909340&color=pink`)
        expect(body.message === 'Cab booked!' || body.message === 'No cabs available!').toBeTruthy();
    });
    test("End Ride Endpoint", async () => {
      const { body } = await request.get(`/ride/end/?id=3&lattitude=19.214203&longitude=72.980858`)
      expect(body.message === 'Ride completed!' || body.message === `Can't complete ride for a cab which is not booked!`).toBeTruthy();
    });
    test("Show Available Cabs Endpoint", async () => {
      const { body } = await request.get(`/ride/search?radius=50&lattitude=19.214203&longitude=72.980858`)
        console.log(body);
        expect(body.message === 'Cabs Available !' || body.message === 'No cabs available!').toBeTruthy();
    });
});
