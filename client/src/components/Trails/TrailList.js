import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Trail from './Trail'

class TrailList extends Component {
  
    toggleEdit= () => {
        this.setState({toggleTrail: !this.state.toggleTrail})
    }
    render() {
        return (
            <div>
                <h2>TrailList</h2>
                <button>Add A Trail</button>
                {this.props.trails.map((trail) => {
                return(
                   <div key={trail.id}>

                   
                   
                   <Link to={`/parks/${this.props.parkId}/trails/${trail.id}`}>
                            <h3>{trail.name}</h3>
                            <div>{trail.image}</div>
                            
                    </Link>
                    
                    </div>
                )
               
                })}

            </div>
        );
    }
}

export default TrailList;



{/* <div key={trail.id}>
<strong>{trail.name}</strong>
<div>{trail.image}</div>
<button onClick={this.toggleEdit}>Read More</button>
{this.state.toggleTrail ? <Trail {...trail} deleteATrail={this.props.deleteATrail}/> : null } */}
