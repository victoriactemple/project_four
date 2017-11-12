import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';


const ParkName = styled.h3`
font-family: 'Tenor Sans', sans-serif;
 font-size: 25px;
 color: black;
 text-decoration: none;
 a {
     color: black;
     text-decoration: none;
 }
 
`

class ParkList extends Component {
    state = {
        parks: []
    }

    componentWillMount() {
        this.getAllParks()
    }

    getAllParks = async () => {
        const res = await axios.get('/api/parks')
        this.setState({parks: res.data})
        console.log(res.data)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>GEORGIA STATE PARKS</h1>
                        
                    {this.state.parks.map(park => (
                    <Link key={park.id} to={`/parks/${park.id}`}>
                        <ParkName>{park.name}</ParkName>
                        
                    </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default ParkList;