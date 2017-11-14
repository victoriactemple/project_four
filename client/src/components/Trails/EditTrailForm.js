import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Trail from './Trail'

class EditTrailForm extends Component {
        state={
            park: {},
            trail: {
                name: '',
                difficulty: '',
                image: '',
                distance: '',
                pet_friendly: '',
                elevation_profile: ''
            },
            redirectToTrail: false
        }
componentWillMount() {
    this.setState({trail: this.props.trail})
}


handleChange = (event) => {
    const attribute = event.target.name
    const trail = {...this.state.trail}

    trail[attribute] = event.target.value
    this.setState({trail: trail})
}

handleSubmit = async (event) => {
    try{
        event.preventDefault()
        const park_id  = this.state.trail.park_id
        const trail_id  = this.state.trail.id
        const clonedTrail = {...this.state.trail}
        
        const response = await axios.patch(`/api/parks/${park_id}/trails/${trail_id}` , {
         trail: clonedTrail
            
        })
        await this.getTrailAndComment()
        this.props.toggleEditTrail()

        console.log(response)
        this.setState({trail: response.data, redirectToTrail: true})
    }
    catch(error) {
        console.log(error)
    }
}

    render() {

        if (this.state.redirectToTrail) {
            const { park_id } = this.props
            const { trail_id } = this.props
            return(
                    <Redirect to={`/parks/${park_id}/trails/${trail_id}`} />

                    )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.trail.name} />
                </div>
                <div>
                    <input onChange={this.handleChange} type="text" name="difficulty" value={this.state.trail.difficulty} />
                </div>
                <div>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.trail.image} />
                </div>
                <div>
                    <input onChange={this.handleChange} type="number" name="distance" value={this.state.trail.distance} />
                </div>
                <div>
                    <input onChange={this.handleChange} type="boolean" name="petFriendly" value={this.state.trail.pet_friendly} />
                </div>

            <button onClick={this.toggleEditTrail}>submit changes</button>
                </form>
            </div>
        );
    }
}

export default EditTrailForm;





// This resulted in "You're trying to redirect to the same route you're on"

     // if (this.state.redirectToTrail) {
        //     const park_id = this.state.trail.park_id
        //     const trail_id = this.state.trail.id
        //     return(
        //         <Redirect to={`/parks/${park_id}/trails/${trail_id}`} />
        //     )
        // }