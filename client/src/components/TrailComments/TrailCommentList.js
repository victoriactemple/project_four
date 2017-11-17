import React from 'react';
import TrailComment from './TrailComment'
import TrailCommentForm from './TrailCommentForm'
import styled from 'styled-components';

const AddCommentButton = styled.button`
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
&:focus{
        outline: none;
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
            <AddCommentButton onClick={props.toggleAddComment}>
           
             <span class="sr-only"> add comment </span><span></span>
            <i class="fa fa-comment" aria-hidden="true" title="add comment"></i>
            <span></span> add comment
            
            
            </AddCommentButton>
        </div>
    );
};

export default TrailCommentList;