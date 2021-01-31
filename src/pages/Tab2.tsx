import React, {useState} from 'react';
import { IonCardTitle, IonCardHeader,IonCardSubtitle,IonButtons,IonMenuToggle,IonListHeader,IonContent, IonHeader,IonCard,IonItemDivider,IonCheckbox,IonItem,IonMenu,IonList,IonRouterOutlet, IonIcon, IonLabel, IonButton, IonCardContent, IonPage, IonTitle, IonToolbar, IonApp, IonSplitPane } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { INITIAL_EVENTS, createEventId } from '../event-utils'
import './Tab2.css';


const checkboxList = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

const Tab2: React.FC = () => {
  return(
  //   <div id="test">
  //     <h1>Hello World</h1>
  //   </div>

  //   <div id = "test">
  //     <h2></h2>
  //   </div>
  // )
  // return React.createElement(
  //   'div',
  //   {id:'test', className:"dummyClass"},
  //  )

  
  <IonApp>
    <IonContent>
    <IonSplitPane contentId="main" >
    <IonMenu contentId="main" type="push" className="sidebar">

    <IonHeader>
      <IonToolbar color="primary" className="toolbar">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        <IonMenuToggle auto-hide="false">
          <IonItem button>
            <IonIcon slot="start" name='home'></IonIcon>
            <IonLabel>
              Home
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
  
  

  <IonPage className="ion-page" id="main">
    <IonHeader>
      <IonToolbar className = "headerClass">
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" name='menu'></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        

        <div className = "Buttons">
          <IonButton>Settings</IonButton>
          <IonButton>Settings</IonButton>
          <IonButton>Settings</IonButton>
        </div>
      </IonToolbar>
    </IonHeader>
    
    <IonContent className="cards">
    <div className = "ionCards">
    <IonTitle>Clubs and Societies</IonTitle>
    <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
    </IonCard>
    <IonCard className = "cards">
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
      </IonCard>
      <IonCard  className = "cards">
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
      </IonCard>
      </div>
      </IonContent>


  </IonPage>
  </IonSplitPane>
  </IonContent>
  </IonApp>
  );
}

export default Tab2
