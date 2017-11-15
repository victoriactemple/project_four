import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class NewTrailForm extends Component {
    state ={
        newTrail: {
            name: '',
            difficulty: '',
            image: '',
            distance: '',
        
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedTrail = { ...this.state.newTrail }
        updatedTrail[attribute] = event.target.value
        this.setState({ newTrail: updatedTrail })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { park_id } = this.props
        const emptyForm={
            name: '',
            difficulty: '',
            image: '',
            distance: ''
          }
        const res = await axios.post(`/api/parks/${park_id}/trails`, {
            trail: this.state.newTrail
        })
        this.setState({ 
            newTrailId: res.data._id, 
            newTrail: emptyForm})
            
        await this.props.toggleShowNewTrailForm()
       await this.props.getOnePark()  
      
    }
    
    
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.newTrail.name} placeholder="name"/>
                </div>
                <div>
                    <input onChange={this.handleChange} type="text" name="difficulty" value={this.state.newTrail.difficulty} placeholder="difficulty" />
                </div>
                <div>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.newTrail.image} placeholder="image"/>
                </div>
                <div>
                    <input onChange={this.handleChange} type="number" name="distance" value={this.state.newTrail.distance} placeholder="distance"/>
                </div>

            <button onClick={this.toggleEditTrail}>submit changes</button>
                </form>
            </div>
        );
    }
}


export default NewTrailForm;