const model = require("../models/user");
const mongoose = require("mongoose");

getData = (req, res) => {
  model.find({}, (err, docs) => {
    if (err) {
      res.send({ error: "(GET) Find Error" });
    } else {
      res.send({
        usuarios: docs,
      });
    }
  });
};

getOneData = (req, res) => {
  const { id } = req.params;
  model.find({ _id: parseId(id) }, (err, docs) => {
    if (err) {
      res.sent({ error: "(GET-1) Find Error" });
    } else {
      res.send({
        usuarios: docs,
      });
    }
  });
};

postOneData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.status(422).send({ error: "(POST) Create Error" });
    } else {
      res.send({ usuarios: docs });
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

putOneData = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne({ _id: parseId(id) }, body, (err, docs) => {
    if (err) {
      res.send({ error: "(PUT) Update Error " });
    } else {
      res.send({ usuarios: docs });
    }
  });
};

deleteOneData = (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(id) }, (err, docs) => {
    if (err) {
      res.send({ error: "(PUT) Update Error " });
    } else {
      res.send({ usuarios: docs });
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
