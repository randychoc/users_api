const model = require("../models/user");
const mongoose = require("mongoose");
const db = require("../firebase");
const user = require("../models/user");

const dbUsers = db.collection("users");

const getData = (req, res) => {
  model.find({}, (err, docs) => {
    if (err) {
      res.status(404).send({ error: "(GET) Find Error" });
    } else {
      dbUsers.onSnapshot((snapshot) => {
        const users = {};
        snapshot.forEach((element) => {
          users[element.id] = element.data();
        });
        console.log(users);
      });

      res.send({
        usuarios: docs,
      });
    }
  });
};

const getOneData = (req, res) => {
  const { id } = req.params;
  model.find({ _id: parseId(id) }, (err, docs) => {
    if (err) {
      res.status(404).send({ error: "(GET-1) Find Error" });
    } else {
      res.status(200).send({ usuarios: docs });
    }
  });
};

const postOneData = (req, res) => {
  const data = req.body;
  model.create(data, async (err, docs) => {
    if (err) {
      res.status(400).send({ error: "(POST) Create Error" });
    } else {
      const auxData = {
        name: docs.name,
        email: docs.email,
        user: docs.user,
        password: docs.password,
      };
      const auxId = docs._id.toString();
      await dbUsers.doc(auxId).set(auxData);
      res.status(200).send({ usuarios: docs });
    }
  });
};

const parseId = (id) => {
  try {
    return mongoose.Types.ObjectId(id);
  } catch (error) {
    return console.log(
      "Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
    );
  }
};

const putOneData = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne({ _id: parseId(id) }, body, async (err, docs) => {
    if (err) {
      res.status(400).send({ error: "(PUT) Update Error " });
    } else {
      await dbUsers.doc(id).set(body);
      res.status(200).send({ usuarios: docs });
    }
  });
};

const deleteOneData = (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(id) }, async (err, docs) => {
    if (err) {
      res.status(400).send({ error: "(DELETE) Update Error " });
    } else {
      await dbUsers.doc(id).delete();
      res.status(200).send({ usuarios: "User Deleted" });
    }
  });
};

module.exports = {
  getData,
  getOneData,
  postOneData,
  putOneData,
  deleteOneData,
};
