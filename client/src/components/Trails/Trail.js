import React from 'react';

const Trail = (props) => {
    return (
        <div>
            <strong>{props.name} </strong>
             <p>{props.difficulty}</p>
        </div>
    );
};

export default Trail;