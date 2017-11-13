import React from 'react';
import Trail from './Trail'

const TrailList = (props) => {
    return (
        <div>
            <h3>Trail List</h3>
            <button>Add a trail</button>
            {props.trails.map((trail) =>{
                return (
        <Trail {...trail} key={trail.id} />                )
            })}

        </div>
    );
};

export default TrailList;

 