var express = require("express");
var router = express.Router();
var Datastore = require("nedb");
var users = new Datastore({ filename: "./usersDb.db", autoload: true });

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", function(req, res) {
  const { user, pass } = req.body;
  users.insert({ user, pass }, function(err, doc) {
    console.log("Inserted", doc.user, "with pass", doc.pass);
  });
  res.send({ registerd: true });
});
router.get("/getUsers", function(req, res) {
  users.find({}, function(err, docs) {
    res.send(docs);
  });
});
router.delete("/deleteUser", function(req, res) {
  const { user } = req.body;
  users.remove({ user: user }, function(err, numDeleted) {
    console.log("Deleted", numDeleted, "user(s)");
  });
  res.send({ user: true });
});

module.exports = router;
