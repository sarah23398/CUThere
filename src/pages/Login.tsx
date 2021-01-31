import React, { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Col, Row } from 'react-bootstrap';



const Tab4: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser(){
        console.log(username, password)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        
        <Row className="landing row" onChange={(e:any) => setUsername(e.target.value)}>
            <Col className="col"><LeftSide /></Col>
            <Col className="col"><RightSide /></Col>
        </Row>

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
