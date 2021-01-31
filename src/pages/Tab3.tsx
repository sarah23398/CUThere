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
 
  <IonApp>
    <IonContent>
    <IonSplitPane contentId="main">
    <IonMenu contentId="main" type="push" className="sidebar">

    <IonHeader >
      <IonToolbar className="toolbar" color="light">
        <div>
          <div className= "personIcon">
          <IonIcon slot="start" name='person' color="tertiary" ></IonIcon>

          </div>

       
          
          <IonTitle className="name">
          
            <h2>Kanye West</h2>
          </IonTitle>
          <span className="role"> Student </span>
          <hr className="solidline"></hr>

        </div>
        
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        <IonMenuToggle auto-hide="false">
          <IonItem button>
            <IonIcon slot="start" name='home' color="tertiary"></IonIcon>
            <IonLabel>
              Calendar
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle auto-hide="false">
          <IonItem button>
            <IonIcon slot="start" name='home' color="tertiary"></IonIcon>
            <IonLabel>
              Courses
            </IonLabel>
           
          </IonItem>
          <IonItem>
          <ul className="list">
            <b>
            <li> COMP 2005</li>
              <li> COMP 245</li>
              <li> COMP 2406</li>
              <li> LAW 1001</li>
              <li> ECON 1002</li>

            </b>
              
            </ul>
          </IonItem>
          
          
        </IonMenuToggle>
        <IonMenuToggle auto-hide="false">
          <IonItem button>
            <IonIcon slot="start" name='home' color="tertiary"></IonIcon>
            <IonLabel>
              Clubs and Societies 
            </IonLabel>
          </IonItem>
          <IonItem>
          <ul className="list">
              <li><b> Carleton Debating Society</b></li>
            </ul>
          </IonItem>
        </IonMenuToggle>
        
      </IonList>
    </IonContent>
    
  </IonMenu>
  
  

  <IonPage className="ion-page" id="main" >
    <IonHeader>
      <IonToolbar className = "headerClass" color="light">
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" name='menu'></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>

        <IonSearchbar className="searchBar" color="light"></IonSearchbar>


        <div className = "Buttons">
          <IonButton fill ="solid" color="tertiary" expand="block">
            <IonLabel color="success"> 
              Log Out
            </IonLabel>
          </IonButton>
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
            
              <IonCardTitle className="cardTitle" color="tertiary">
                Carleton Computer Science Society
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
                Upcomming Event: Virtual Resume Hack 
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
              <IonCardTitle className="cardTitle" color="tertiary">
                Carleton Women In Computer Science
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
                Upcomming Event: Grad Meet and Greet
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
