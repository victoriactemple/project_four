import React, { Component } from 'react';
import axios from 'axios'

class Park extends Component {
        state ={
            park: {},
            comments: []
        }
        componentWillMount() {
            const park_id = this.props.match.params.park_id
            this.getOnePark(park_id)
        }
    
        getOnePark = async (park_id) => {
            try {
            const res = await axios.get(`/api/parks/${park_id}`)
            await this.setState({park: res.data})
            console.log(res.data)
            } catch(error) {
                await this.setState({error: error.message})
            }
        }

    render() {
        return (
            <div>
                <h1>{this.state.park.name}</h1>
                <img src = {this.state.park.image} />
                <p>{this.state.park.address}</p>
                <p>{this.state.park.description}</p>

            
                <p></p>
            </div>
        );
    }
}

export default Park;