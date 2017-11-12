import React from 'react';
import styled from 'styled-components';
import Comment from './Comment'



const CommentList = (props) => {
    return (
        <div>
            <h4>Comments</h4>
            <button>Add A Comment</button>
              {props.comments.map((comment) => {
        return (

            <Comment {...comment} key={comment.id}/>
           
        )
        
    })}  
        </div>
    );
};

export default CommentList;


{/* <div>

<strong>{comment.title} </strong>
    <p>{comment.content}</p>
</div> */}