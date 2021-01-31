import React, { useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom';
import { IonButton, IonItem, IonLabel, IonCheckbox, IonInput } from '@ionic/react';
import './LeftSide.css';
import axios from "axios";

const LeftSide = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function loginUser(){
        /*
        console.log(Object.values(email));
        console.log(password);
    */
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
    
        
        const body = {email: Object.values(email)[0], password: Object.values(password)[0]};
      //  console.log(body)
    
    
        axios.post("http://localhost:5001/api/users/login", body, config)
        .then(res => {
            console.log(res);
            if (res.status === 200)
            {
                return <Redirect to = "/tab2"/>
            }

        }).catch(err =>{
            console.log(err);
        })
       
    
    }

    function handleEmailChange(event) {
        setEmail({ ...email, [event.target.name]: event.target.value });
    }

    function handlePasswordChange(event) {
        setPassword({ ...password, [event.target.name]: event.target.value });
    }

    return(
        <div className="template">
            <form>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput onIonChange = {handleEmailChange}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" onIonChange = {handlePasswordChange} />
            </IonItem>
            <IonItem lines="none">
                <IonLabel>Remember me</IonLabel>
                <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>

            <IonButton className="buttons" variant="primary" type="" onClick={() => loginUser()}>
                Login
            </IonButton>

            <IonButton className="buttons" >Sign Up</IonButton>
            </form>
        </div>
    )
}




export default LeftSide;