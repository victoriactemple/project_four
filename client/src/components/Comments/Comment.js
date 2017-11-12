import React from 'react';

const Comment = (props) => {
    return (
        <div>
            <strong>{props.title} </strong>
             <p>{props.content}</p>
        </div>
    );
};

export default Comment;