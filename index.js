const express = require("express");
const app = express();
const port = 3001;
const userRouter = require("./app/routes/user");
const initDB = require("./config/db");
require("dotenv").config({
  path: `.env`,
});

//for parsing json
app.use(
  express.json({
    limit: "20mb",
  })
);
// for parsing application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);
//path
app.use(userRouter);

app.listen(port, () => {
  console.log(`The App is running in http://localhost:${port}`);
});

console.log(process.env.APIKEY);

initDB();
