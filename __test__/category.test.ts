import supertest from "supertest"
import createServer from "../utils/server"

const app = createServer()
describe("category" , () => {
    describe("get category route" , () => {
        describe("given the category does not exist" , () => {
            it("Should return a 404" ,async () => {
                const categoryId = "as48qfdv1xc894dsf5b2c1v894fa89f5f1bg89gs89ewr65123dfg8rwetwef48sdf63d";
                await supertest(app).get(`api/categories/${categoryId}`).expect(404)
            })
        })
    })
})