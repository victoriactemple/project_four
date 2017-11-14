import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import EditTrailForm from './EditTrailForm'

class Trail extends Component {
    state={
        park: {},
        trail: {
            comments: []
        },
        redirectToPark: false,
        editTrailDetals: false,
        showCreateATrail: false
        
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
        // console.log("i work")
    const { park_id, trail_id } = this.props.match.params
    // console.log(park_id, trail_id)
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

toggleEditTrail = () => {
    this.setState({ editTrailDetails: !this.state.editTrailDetails })
}


    render() {
        if (this.state.redirectToPark){
            return (
                <Redirect to={`/parks/${this.state.park.id}`} />
            )
        }
        if (!this.state.editTrailDetails){
        return (
            <div>
                <h2>{this.state.trail.name}</h2>
                <p>{this.state.trail.image}</p>
                <p>distance: {this.state.trail.distance}</p>
                <p>difficulty: {this.state.trail.difficulty}</p>
                <p>pet_friendly: {this.state.trail.pet_friendly}</p>
                <div>{this.state.trail.elevation_profile}</div>

                <div>{this.state.trail.image}</div>


                <button onClick={this.deleteATrail}>Delete Trail</button>
                <button onClick={this.toggleEditTrail}>Edit Trail</button>
            </div>
        )
    }
    else return(
        <EditTrailForm toggleEditTrail={this.toggleEditTrail} trail={this.state.trail} showTrail={this.getTrailAndComments} toggleEditTrail={this.toggleEditTrail}/>
    )
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