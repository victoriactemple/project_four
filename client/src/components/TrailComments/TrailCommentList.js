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
        </div>
    );
};

export default TrailCommentList;