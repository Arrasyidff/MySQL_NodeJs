const request = require("supertest");
const app = require("../app");
const UserModel = require("../models/User");

const payload = {
  name: "arfafa",
  dob: "1999-08-02",
  address: "Bali",
  description: "Asal Kota"
};

describe("UNIT TEST", () => {
  describe("GET user", () => {
    test("response success", done => {
      request(app)
        .get("/")
        .end((err, res) => {
          const { body, status } = res;
          if (err) {
            return done(err);
          }
          expect(status).toBe(200);
          expect(body).toEqual(expect.any(Array));
          done();
        });
    });
  });

  describe("POST user", () => {
    test("response success", done => {
      request(app)
        .post("/add_user")
        .send(payload)
        .end((err, res) => {
          const { body, status } = res;
          //   console.log(body);
          idUser = body.id;
          console.log(idUser, "Helloo");
          if (err) {
            return done(err);
          }
          expect(status).toBe(201);
          expect(body).toHaveProperty("name", payload.name);
          expect(body).toHaveProperty("dob", payload.dob);
          expect(body).toHaveProperty("address", payload.address);
          expect(body).toHaveProperty("description", payload.description);
          done();
        });
    });
  });
  describe("PUT user", () => {
    test("response success", done => {
      request(app)
        .put("/update_user/"+19)
        .send(payload)
        .end((err, res) => {
          const { body, status } = res;
          if (err) {
            return done(err);
          }
          expect(status).toBe(200);
          expect(body).toHaveProperty("name", payload.name);
          expect(body).toHaveProperty("dob", payload.dob);
          expect(body).toHaveProperty("address", payload.address);
          expect(body).toHaveProperty("description", payload.description);
          done();
        });
    });
  });

  describe("DELETE user", () => {
    test("response success", done => {
      request(app)
        .delete("/delete_user/"+19)
        .end((err, res) => {
          const { body, status } = res;
          if (err) {
            return done(err);
          }
          expect(status).toBe(200);
          expect(body).toHaveProperty("msg", "User Deleted");
          done();
        });
    });
  });
});
