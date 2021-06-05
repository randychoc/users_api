const mongoose = require("mongoose");
const DB_URI = `mongodb://localhost:27017/users_api`;

module.exports = () => {
  const conn = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (err) => {
        if (err) {
          console.log("MongoDB Connection Failed!");
        } else {
          console.log("Connected to MongoDB!");
        }
      }
    );
  };
  conn();
};
