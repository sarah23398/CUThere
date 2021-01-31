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
            <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" />
            </IonItem>
            <IonItem lines="none">
                <IonLabel>Remember me</IonLabel>
                <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>

            <IonButton className="buttons" variant="primary" type="" onClick={loginUser}>
                Login
            </IonButton>

            <IonButton className="buttons" >Sign Up</IonButton>
            </form>
        </div>
    )
}

export default LeftSide;