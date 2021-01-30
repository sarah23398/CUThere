const functions = require('firebase-functions');
const config = require("./util/config");
const admin = require('firebase-admin');
var serviceAccount = require("./util/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://cuthere-738da.firebaseio.com",
  apiKey: "AIzaSyDG4ZutCpqflP4nK816YUIdHtiRZXYX_KM",
    authDomain: "cuthere-738da.firebaseapp.com",
    projectId: "cuthere-738da",
    storageBucket: "cuthere-738da.appspot.com",
    messagingSenderId: "154558297656",
    appId: "1:154558297656:web:4c73f6c4663ff4d97a58cd",
    measurementId: "G-LYL6N3BDZR"
});

//admin.initializeApp(config);

const express = require("express"); 
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors);

const userRoute = require("./api/users/users");
const coursesRoute = require("./api/courses/courses");

app.use('/users', userRoute);
app.use('/courses', coursesRoute);


exports.api = functions.https.onRequest(app);
/*
app.listen(5001, ()=>{
    console.log("App on port 5000")
});
*/