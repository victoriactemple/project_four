import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Trail extends Component {
    state={
        park: {},
        trail: {
            comments: []
        },
        redirectToPark: false
        
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


deleteATrail = async () => {
    try {
        console.log("i work")
    const { park_id, trail_id } = this.props.match.params
    console.log(park_id, trail_id)
    const response = await axios.delete(`/api/parks/${park_id}/trails/${trail_id}`)
    
    this.setState({
        park: response.data,
        redirectToPark: true
    })
} catch (error) {
    console.log(error)
    await this.setState({ error: error.message })
}
}



    render() {
        if (this.state.redirectToPark === true){
            return (
                <Redirect to={`/parks/${this.state.park.id}`} />
            )
        }
    
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