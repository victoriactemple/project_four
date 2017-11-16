import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import image from '../mountain_image.jpg'

const MainPageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ParkName = styled.h3`
font-family: 'Lato', sans-serif;
 font-size: 25px;
 color: black;
 text-decoration: none;
 a {
     color: black;
     text-decoration: none;
 }
`

const MainPhoto = styled.div`
padding-right: 100px;
img {
    /* max-height: 500px; */
    max-width: 700px;
    z-index: -1;
}
`
// const MainPhoto = styled.div`
// height: 500px;
// width: 900px;
// background-image: 
//     url(${image});
// `



const ParkListContainer = styled.div`
text-align: center;
/* margin: 0 auto; */
background-color: white;
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
                
                    {/* <h1>GEORGIA STATE PARKS</h1> */}
                        
                    <ParkListContainer>
                    {this.state.parks.map(park => (
                        
                 <ParkName>  <Link key={park.id} to={`/parks/${park.id}`}>
                        {park.name}
                        
                    </Link>
                    </ParkName> 
                    ))}
                    </ParkListContainer>
                  <MainPhoto><img src="https://www.lucillesmountaintopinn.com/wp-content/uploads/blog.jpg" /></MainPhoto>  

                
                
            </MainPageContainer>
        );
    }
}

export default ParkList;