const express = require("express");
const router = express();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();
const usersRef = db.collection("users");

router.get("/", (req, res) => {
    
    let users = [];
    usersRef
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            users.push(doc.data());
        });
        res.status(200).send(users);

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(400).send("Users not found");
    });

});

/*
Returns data of a student with a specific student id
*/

router.get("/:id", (req, res) => {

    let id = req.params.id;
    usersRef
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let user = doc.data();
            if (user.userId === id || user.user-id === id) {
                return res.status(200).send(user);
            }
        });
        return res.status(400).send("User not found");
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(400).send("User not found");
    });


});

router.post("/", (req, res) => {

    const {email, password, studentId, name, notifications, programDegree, programYear, gender, matchGender, matchProgram, freeTimeSlots, courseIds, societyNames} = req.body; 

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

        //Search for courses + societies 
        let courseList = [];
        let societyList = [];

        const newStudent = {
            email: email,
            name: name,
            userId: studentId,
            notifications: notifications,
            program: {
                degree: programDegree,
                year: programYear, 
            },
            gender: gender,
            matchGender: matchGender,
            matchProgram, matchProgram,
            freeTimeSlots: freeTimeSlots
        }

        usersRef.add(newStudent)
        .then(()=> {
            res.status(200).send("User successfully added");
        })
        .catch(err => {
            console.log(err);
            console.log("User Already exists");        
        })
    })
    .catch((error) => {
        console.log(error.message);
        res.status(400).send("Problem adding user");
    });
    ;

});

router.post("/login", (req, res) => {
    
    const {email, password} = req.body;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential;
        res.status(200).send(user);

    })
    .catch(err => {
        console.log(err.message);
        console.log("Login unsuccessful");
        res.status(400); 
    });

});

module.exports = router;
