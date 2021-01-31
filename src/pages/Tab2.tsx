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
    React.createElement('div')
  );
}

export default Tab2
