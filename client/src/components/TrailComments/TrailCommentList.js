import React from 'react';
import TrailComment from './TrailComment'


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
            <button>add comment</button>
        </div>
    );
};

export default TrailCommentList;