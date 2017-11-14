import React from 'react';
import styled from 'styled-components'
import Comment from './Comment'
import CommentForm from './CommentForm'



const CommentList = (props) => {
    return (
        <div>
            <h4>Comments</h4>
            <button onClick={props.toggleCommentForm}>Add A Comment</button>
              {props.comments.map((comment) => {
        return (

            <Comment {...comment} key={comment.id}/>
           
        )
        
       {this.props.showNewCommentForm ? <CommentForm toggleCommentForm={this.toggleShowNewForm}/> : null}
        
    })}  
        </div>
    );
};

export default CommentList;

