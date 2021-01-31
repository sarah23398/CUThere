import React, {useState} from 'react';
import { IonCardTitle, IonCardHeader,IonCardSubtitle,IonButtons,IonMenuToggle,IonListHeader,IonContent, IonHeader,IonCard,IonItemDivider,IonCheckbox,IonItem,IonMenu,IonList,IonRouterOutlet, IonIcon, IonLabel, IonButton, IonCardContent, IonPage, IonTitle, IonToolbar, IonApp, IonSplitPane, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { INITIAL_EVENTS, createEventId } from '../event-utils'
import './Tab3.css';


const checkboxList = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

const Tab3: React.FC = () => {
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

        <IonSearchbar className="searchBar"></IonSearchbar>


        <div className = "Buttons">
          <IonButton>Settings</IonButton>
          <IonButton>Settings</IonButton>
          <IonButton>Settings</IonButton>
        </div>
      </IonToolbar>
    </IonHeader>
    
    <IonContent className="cards">
    <div className = "ionCards">
    <IonTitle color="secondary">Clubs and Societies
    <hr className="solidline"></hr>
    </IonTitle>
    
    <IonCard className="cards">

        <IonCardHeader>
          <div>
            <div className="t1">
            <IonCardSubtitle color="primary">Card Subtitle</IonCardSubtitle>
              <IonCardTitle className="cardTitle" color="tertiary">
                Carleton University Debate Society
              </IonCardTitle>

            </div>
            <div className="b1">
              <IonButton fill ="outline" color="success" expand="block">
                <IonLabel color="tertiary"> Added
                </IonLabel>
              </IonButton>
              
            </div>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <h6>
            <IonCardSubtitle color="primary">
              <u>
                Upcomming Event: BP training seminar
              </u>
            </IonCardSubtitle>
          </h6>
        </IonCardContent>
    </IonCard>

    <IonCard className="cards">

        <IonCardHeader>
          <div>
            <div className="t1">
            <IonCardSubtitle color="primary">Card Subtitle</IonCardSubtitle>
              <IonCardTitle className="cardTitle" color="tertiary">
                Carleton University Debate Society
              </IonCardTitle>

            </div>
            <div className="b1">
              <IonButton fill ="solid" color="success" expand="block">
                <IonLabel color="tertiary"> Add
                </IonLabel>
              </IonButton>
              
            </div>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <h6>
            <IonCardSubtitle color="primary">
              <u>
                Upcomming Event: BP training seminar
              </u>
            </IonCardSubtitle>
          </h6>
        </IonCardContent>
    </IonCard>

    <IonCard className="cards">

        <IonCardHeader>
          <div>
            <div className="t1">
            <IonCardSubtitle color="primary">Card Subtitle</IonCardSubtitle>
              <IonCardTitle className="cardTitle" color="tertiary">
                Carleton University Debate Society
              </IonCardTitle>

            </div>
            <div className="b1">
              <IonButton fill ="solid" color="success" expand="block">
                <IonLabel color="tertiary"> Add
                </IonLabel>
              </IonButton>
              
            </div>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <h6>
            <IonCardSubtitle color="primary">
              <u>
                Upcomming Event: BP training seminar
              </u>
            </IonCardSubtitle>
          </h6>
        </IonCardContent>
    </IonCard>

    <IonCard className="cards">

        <IonCardHeader>
          <div>
            <div className="t1">
            <IonCardSubtitle color="primary">Card Subtitle</IonCardSubtitle>
              <IonCardTitle className="cardTitle" color="tertiary">
                Carleton University Debate Society
              </IonCardTitle>

            </div>
            <div className="b1">
              <IonButton fill ="solid" color="success" expand="block">
                <IonLabel color="tertiary"> Add
                </IonLabel>
              </IonButton>
              
            </div>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <h6>
            <IonCardSubtitle color="primary">
              <u>
                Upcomming Event: BP training seminar
              </u>
            </IonCardSubtitle>
          </h6>
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

export default Tab3
