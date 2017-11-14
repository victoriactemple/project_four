import React from 'react';
import TrailComment from './TrailComment'
import TrailCommentForm from './TrailCommentForm'


const TrailCommentList = (props) => {
    return (
        <div>
            <h5>Comments</h5>
            {props.comments.map((comment) => {
                return(
                    <TrailComment {...comment} key={comment.id}/>
                )
            })}
            
            <br />
            <button onClick={props.toggleAddComment}>add comment</button>
        </div>
    );
};

export default TrailCommentList;