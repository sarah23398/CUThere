import React, { useState } from 'react';
import { IonButton, IonItem, IonLabel, IonCheckbox, IonInput } from '@ionic/react';
import './LeftSide.css';

const LeftSide = () => {
    const [username] = useState('')
    const [password] = useState('')

    function loginUser(){
        console.log(username, password)
    }
    return(
        <div className="template">
            <form>
            <IonItem className="label1">
                <IonLabel className = "label" color = "primary"  position = "floating">Username/Email</IonLabel>
                <IonInput />
            </IonItem>
            <IonItem>
                <IonLabel className = "label"  color = "primary"  position="floating">Password</IonLabel>
                <IonInput type="password" />
            </IonItem>
            <IonItem lines="none">
                <IonLabel className ="rem" color="primary">Remember me</IonLabel>
                <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
            
            <IonButton className="buttons" variant="primary" type="" onClick={loginUser}>
            <IonLabel className="loginButton" >Login</IonLabel>
            </IonButton>

            <IonButton className="buttons" >
            <IonLabel className="loginButton" >Sign Up</IonLabel>
            </IonButton>
            </form>
        </div>
    )
}

export default LeftSide;