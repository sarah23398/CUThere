const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const config = require("./util/config");
const express = require("express");
const app = express();

app.use(express.json());

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(config);
  //firebase.analytics();

  const usersRoute = require("./api/users/users");
  const coursesRoute = require("./api/courses/courses");
  const societiesRoute = require("./api/societies/societies");

  app.use("/api/users", usersRoute);
  app.use("/api/courses", coursesRoute);
  app.use("/api/societies", societiesRoute);

app.listen(5000, () =>{
    console.log("Listening on port 5000");
})