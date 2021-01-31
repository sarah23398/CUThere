import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import './Login.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


const Tab4: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password] = useState('')


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        
        <IonRow className="landing row" onChange={(e:any) => setUsername(e.target.value)}>
            <IonCol className="col"><LeftSide /></IonCol>
            <IonCol className="col"><RightSide /></IonCol>
        </IonRow>

        {/* <IonInput 
            placeholder="Username?" 
            onIonChange={(e:any) => setUsername(e.target.value)}    
        />

        <IonInput 
            placeholder="Password?" 
            onIonChange={(e:any) => setPassword(e.target.value)}
        /> */}
        {/* <Button onClick={loginUser}>Test Button</Button> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
