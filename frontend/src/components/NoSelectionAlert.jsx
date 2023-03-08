import React from "react";
import Alert from 'react-bootstrap/Alert';

function NoSelectionAlert(){
    return (
        <Alert variant= "danger" dismissable>
            <Alert.Heading><img src= "./img/warning-sign.png" alt= "warning sign" /></Alert.Heading>
            <p>Please click on two or more selections to get your mix!</p>
        </Alert>
    )
};

export default NoSelectionAlert;