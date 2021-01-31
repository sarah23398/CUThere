const express = require("express");
const router = express();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();
const coursesRef = db.collection("courses");

router.get("/", (req, res) => {
    
    let courses = [];
    coursesRef 
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            courses.push(doc.data());
        });
        res.status(200).send(courses);

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(400).send("Courses not found");
    });

});

module.exports = router;
