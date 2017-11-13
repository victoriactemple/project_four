import React, { Component } from 'react';
import axios from 'axios'

class Trail extends Component {
    state={
        trail: {
            comments: []
        }
        
    }

 componentWillMount() {
     this.getTrailAndComments()
 }

    getTrailAndComments = async (trail_id) => {
        try {
            const { park_id, trail_id } = this.props.match.params
            console.log(trail_id)
            const res = await axios.get(`/api/parks/${park_id}/trails/${trail_id}`)
            this.setState({trail: res.data})
    } catch(error) {
        await this.setState({error: error.message})
    }
}


deleteATrail = async (event) => {
    try {
        const 
    console.log(park_id, id)
    const response = await axios.delete(`/api/parks/${park_id}/trails/${id}`)
    
    this.setState({
        park: response.data
    })
} catch (error) {
    console.log(error)
    await this.setState({ error: error.message })
}
}



    render() {
        return (
            <div>
                <h2>{this.state.trail.name}</h2>
                <p>{this.state.trail.image}</p>
                <p>{this.state.trail.distance}</p>
                <button onClick={this.deleteATrail}>Delete Trail</button>
                <button>Edit Trail</button>
            </div>
        );
    }
}

export default Trail;


// import React from 'react';

// // const Trail = (props) => {
// //     return (
// //         <div>
// //             <strong>{props.name} </strong>
// //              <p>Difficulty: {props.difficulty}</p>
// //              <p>Distance: {props.distance} miles</p>
// //              <p>Pet Friendly: {props.pet_friendly}</p>
// //              <button value={props.id} onClick={props.deleteATrail}>Delete Trail</button>

// //         </div>
// //     );
// // };

// // export default Trail;