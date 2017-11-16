import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Trail from './Trail'
import styled from 'styled-components';

const TrailListContainer = styled.div`
@media only screen and (min-width: 1024px);
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
/* border: solid black; */
margin: 0 auto;
padding-left: 30px;
padding-right: 30px;
padding-bottom: 30px;

`
const TrailName = styled.div`
font-size: 20px;

a {
    font-family: 'Raleway', sans-serif;
    color: black;
    text-decoration: none;
    /* color: rgb(104, 153, 80) */
}
`


const TrailListImage = styled.div`
img {
    max-width: 350px;
}
a{
    text-decoration: none;
}
`


class TrailList extends Component {
  
    toggleEdit= () => {
        this.setState({toggleTrail: !this.state.toggleTrail})
    }
    render() {
        return (
            <TrailListContainer>
                
                
                {this.props.trails.map((trail) => {
                return(
                   <TrailName key={trail.id}>

                   
                   
                   <Link to={`/parks/${this.props.parkId}/trails/${trail.id}`}>
                            
                            <TrailListImage> <img src ={trail.image} /></TrailListImage>
                            <TrailName>{trail.name}</TrailName>
                            
                    </Link>
                    </TrailName>
                    
                   
                )
               
                })}

        </TrailListContainer>
        );
    }
}

export default TrailList;



{/* <div key={trail.id}>
<strong>{trail.name}</strong>
<div>{trail.image}</div>
<button onClick={this.toggleEdit}>Read More</button>
{this.state.toggleTrail ? <Trail {...trail} deleteATrail={this.props.deleteATrail}/> : null } */}
