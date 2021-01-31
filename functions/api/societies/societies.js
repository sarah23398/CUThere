const express = require("express");
const router = express();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();
const societiesRef = db.collection("societies");

router.get("/", (req, res) => {

    let societies = [];
    societiesRef 
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            societies.push(doc.data());
        });
        res.status(200).send(societies);

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(400).send("Courses not found");
    });

});

module.exports = router;