import React, { Component } from 'react'
import Trail from './Trail'

class TrailList extends Component {
    state={
        toggleTrail: false
    }
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
                    <strong>{trail.name}</strong>
                    <div>{trail.image}</div>
                    <button onClick={this.toggleEdit}>Read More</button>
                    {this.state.toggleTrail ? <Trail {...trail} /> : null }

                    </div>
                )
                })}

            </div>
        );
    }
}

export default TrailList;
