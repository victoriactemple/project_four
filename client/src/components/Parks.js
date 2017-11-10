import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'



class Parks extends Component {
    state = {
        parks: []
    }

    componentWillMount() {
        this.getAllParks()
    }

    getAllParks = async () => {
        const res = await axios.get('/api/parks')
        this.setState({parks: res.data})
    }

    render() {
        return (
            <div>
                <h1>GEORGIA STATE PARKS</h1>
                {this.state.parks.map(park =>{
                    <Link key={park.id} to={`/${park.id}`}>
                    <h3>{park.name}</h3>
                    
                    </Link>
                })}
                
            </div>
        );
    }
}

export default Parks;