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

router.post("/", (req, res) => {

    const {email, password, studentId, name, notifications, programDegree, programYear, gender, matchGender, matchProgram, freeTimeSlots, courses, societies} = req.body; 

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

        //Search for courses + societies 

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

        console.log(newStudent);

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

module.exports = router;
