import React from 'react';
import Moment from 'react-moment';

const TrailComment = (props) => {
    return (
        <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <p>posted: <Moment fromNow>{props.created_at}</Moment></p>

        </div>
    );
};

export default TrailComment;