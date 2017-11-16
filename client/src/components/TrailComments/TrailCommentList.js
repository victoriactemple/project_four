import React from 'react';
import TrailComment from './TrailComment'
import TrailCommentForm from './TrailCommentForm'
import styled from 'styled-components';

const Button = styled.button`
cursor: pointer;
background: white;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
&:hover{
    box-shadow: 1px 1px 2px;
}
a{
    text-decoration: none;
    color: black;
}
`


const TrailCommentList = (props) => {
    return (
        <div>
            {/* <h5>Comments</h5> */}
            {props.comments.map((comment) => {
                return(
                    <TrailComment {...comment} key={comment.id}/>
                )
            })}
            
            <br />
            <Button onClick={props.toggleAddComment}>add comment</Button>
        </div>
    );
};

export default TrailCommentList;