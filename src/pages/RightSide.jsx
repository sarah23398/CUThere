import React from 'react';
import {Image} from 'react-bootstrap'
import imageUrl from './picture.svg';
import './RightSide.css';
const RightSide = () => {
    return(
        <div>
            <Image className="login_img" src={imageUrl}></Image>
        </div>
    )
}

export default RightSide;