import React from 'react';
import styled from 'styled-components';
import Comment from './Comment'
import CommentForm from './CommentForm'



const CommentList = (props) => {
    return (
        <div>
            <h4>Comments</h4>
            <button onClick={this.toggleCommentForm}>Add A Comment</button>
              {props.comments.map((comment) => {
        return (

            <Comment {...comment} key={comment.id}/>
           
        )
        
       {this.state.showNewCommentFrom ? <CommentForm toggleShowNewForm={this.toggleShowNewForm}/> : null}
        
    })}  
        </div>
    );
};

export default CommentList;

