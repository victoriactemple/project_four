import React from 'react';

const Trail = (props) => {
    return (
        <div>
            {/* <strong>{props.name} </strong> */}
             <p>Difficulty: {props.difficulty}</p>
             <p>Distance: {props.distance} miles</p>
             <p>Pet Friendly: {props.pet_friendly}</p>
             <button value={props.id} onClick={props.deleteATrail}>Delete Trail</button>

        </div>
    );
};

export default Trail;