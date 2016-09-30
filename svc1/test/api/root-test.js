const supertest = require("supertest")
const assert = require("assert")
const api = require("api")

describe("api root", () => {
  it("should return json", done => {
    supertest(api)
      .get("/")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        assert.equal(res.body.app, "epistemy")
        assert.equal(res.body.service, "1")
        assert.equal(res.body.author, "AJ Ostrow")
      })
    .end(done)
  })
})
