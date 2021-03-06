import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
// import image from '../mountain_image.jpg'

const MainPageContainer = styled.div`
@media only screen and (min-width: 1024px);
display: flex;
justify-content: center;
align-items: center;
`

const ParkName = styled.h3`
font-family: 'Quicksand', sans-serif;
 font-size: 1.5vw;
 cursor: pointer;
 color: black;
 text-decoration: none;
 a {
     color: black;
     text-decoration: none;
 }
`

const MainPhoto = styled.div`
/* padding-right: 100px; */
margin-left: -90px;
z-index: -1;
img {
    max-width: 400px;
    max-width: 90%; 
    /* /* height: auto; */

}
`


const ParkListContainer = styled.div`
text-align: center;
background-color: rgba(255, 255, 255, .5);
margin-left: 110px;
max-width: 280px;
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
            <MainPageContainer>
                
                    
                        
                    <ParkListContainer>
                    {this.state.parks.map(park => (
                        
                 <ParkName key={park.id}> <Link to={`/parks/${park.id}`} >
                        {park.name}
                        
                    </Link>
                    </ParkName> 
                    ))}
                    </ParkListContainer>
                  <MainPhoto><img alt="mountain top view in georgia park" src="https://www.lucillesmountaintopinn.com/wp-content/uploads/blog.jpg" /></MainPhoto>  
                  

                
                
            </MainPageContainer>
        );
    }
}

export default ParkList;