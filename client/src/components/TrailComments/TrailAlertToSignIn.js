import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Alert = styled.div`
font-family: 'Arimo', sans-serif;
font-weight: bold;
margin-bottom: 4px;
a{
    text-decoration: none;
    color: black;
}
`

const LoginLink = styled.span`
a{
    color: black;
    /* text-decoration: none; */

}

a:hover{
    /* text-decoration: none; */
    color: rgb(11, 154, 255);
}
`

const Button = styled.button`
text-align: center;
cursor: pointer;
background-color: rgb(251, 250, 248);
color: black;
font-size: .5em;
margin: .5em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
&:hover{
    box-shadow: 1px 1px 2px;
}
&:focus{
    outline: none;
}
`

const TrailAlertToSignIn = () => {
    return (
        <div>
            <Alert>
                <span>You must be signed in to post a comment. </span>
                {/* <div><LoginLink><Link to="/sign_up">Go to login.</Link> </LoginLink></div> */}
                <div>
                    <Button><Link to="/sign_up"><i className="fa fa-user" aria-hidden="true"></i>sign-in  </Link></Button>
                </div>

            </Alert>
        </div>
    );
};

export default TrailAlertToSignIn;