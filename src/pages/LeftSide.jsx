import React, { useState, useEffect } from 'react';
import Bootstrap from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Form, Col, FormGroup, Checkbox } from 'react-bootstrap'
import './LeftSide.css';

const LeftSide = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser(){
        console.log(username, password)
    }
    return(
        <div className="template">
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="labels">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We won't send you spam. Pinky swear.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="labels">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="buttons" variant="primary" type="" onClick={loginUser}>
                Login
            </Button>

            <Button className="buttons" >Sign Up</Button>
            </Form>
        </div>
    )
}

export default LeftSide;