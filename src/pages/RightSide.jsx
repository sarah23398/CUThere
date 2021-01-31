import React from 'react';
import { IonImg } from '@ionic/react';
import imageUrl from './picture.svg';
import './RightSide.css';
const RightSide = () => {
    return(
        <div>
            <IonImg className="login_img" src={imageUrl}></IonImg>
        </div>
    )
}

export default RightSide;