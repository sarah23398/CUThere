const config = require("../../util/config");
const admin = require('firebase-admin');

const express = require("express");
const router = express.Router();
const db = admin.firestore();
const docRef = db.collection('users');

router.post("/", async (req, res)=> {
   
    
    const body = req.body;
    const {email, password, degree, year} = body;

    if (!email || !password) {
        return res.status(400).json({msg: "Please enter all fields"});
    }
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {

        const userData = {
            email: email,
            degree: degree,
            year: year,
        };
        
        docRef.push().set(userData)
        .then(() => {
            res.status(200).send("User successfully registered!");
        })
        .catch(err => {
            console.log(err);
        });

    }).catch(err => {

        let errorMessage = err.message; 
        return res
        .status(400)
        .json({ general: errorMessage })
    });

});

router.get("/", (req, res) => {

    const users = docRef.get();
    users.forEach(user => {
        console.log(user); 
    })


});

module.exports = router;



