import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import TrailList from './Trails/TrailList'
// import Trail from './Trails/Trail'
import NewTrailForm from './Trails/NewTrailForm'




const ParkContainer = styled.div`
font-family: 'Actor', sans-serif;
margin-left: 60px;
margin-right: 60px;
/* text-align: center; */
/* margin: 10px; */
`
const Address = styled.div`
text-align: center;
padding-bottom: 10px;
padding-top: 10px;
`

const ParkName = styled.h1`
text-align: center;
font-family: 'Arimo', sans-serif;
font-weight: 25px;
`

const Description = styled.div`
margin-left: 100px;
margin-right: 100px;
margin-bottom: 20px;
padding: 15px;
background-color: rgba(212, 209, 188, .2);
/* border: solid 1px; */
`

const WeatherContainer = styled.div`
text-align: center;
margin: 0 auto;
padding-bottom: 10px;
font-family: 'Kameron', serif;
background-color: white;
max-width: 300px;
margin-bottom: 20px;
margin-top: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const TrailListContainer = styled.div`
margin-left: 60px;
margin-right: 60px;
`


const AddTrailButton = styled.button`
    text-align: center;
    cursor: pointer;
	color: black;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;
    &:hover{
        box-shadow: 1px 1px 2px;
    }
    &:focus{
        outline: none;
    }
`

const ButtonDiv = styled.div`
padding-top: 10px;
display: flex;
align-items: center;
justify-content: center;

`

const ParkImageMain = styled.div`
/* @media only screen and (min-width: 1024px); */
text-align: center;
img{
    max-width: 100%;
    border-radius: 3px;
}
`
class Park extends Component {
        state ={

            park: {
                trails: [],
                parkComments: []
            },
            showNewTrailForm: false,
            weather: {}
        }
        async componentWillMount() {
           await this.getOnePark()
            await this.getWeather()
        }
    
        getOnePark = async (park_id) => {
            try {
            const park_id = this.props.match.params.park_id
            const res = await axios.get(`/api/parks/${park_id}`)
            console.log(res.data)
            const newPark = res.data.park

            newPark.trails = res.data.trails

            await this.setState({park: newPark})
            } catch(error) {
                await this.setState({error: error.message})
            }
        }

        getWeather = async () => {
            const zipcode = this.state.park.zipcode
            // console.log(zipcode)
            const response = await axios.get(`/api/weather/${zipcode}`)
            const formattedResponse = {
                humidity: response.data.main.humidity,
                temp: response.data.main.temp,
                description: response.data.weather[0].description,
                windSpeed: response.data.wind.speed,
                icon: response.data.weather[0].icon,
                general: response.data.weather[0].main,
                sunset: response.data.sys.sunset
                
            }
            this.setState({weather: formattedResponse})
        }


        deleteATrail = async (event) => {
            try {
            const { park_id } = this.props.match.params.id
            const id = event.target.value
            console.log(park_id, id)
            const response = await axios.delete(`/api/parks/${park_id}/trails/${id}`)
            
            this.setState({
                park: response.data
            })
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

        toggleCommentForm = () => {
            this.setState({showNewCommentForm: !this.state.showNewCommentForm})
        }

        toggleShowNewTrailForm = () => {
            this.setState({showNewTrailForm: !this.state.showNewTrailForm})
        }


    render() {
        return (
            <ParkContainer>


                <ParkName>{this.state.park.name}</ParkName>

              <ParkImageMain><img alt="panaramic photograph of state park" src = {this.state.park.image} /></ParkImageMain>  
                
                <Address>{this.state.park.address}</Address>
                <Description>{this.state.park.description}</Description>

                <WeatherContainer>
                        <h5>Current Weather</h5>
                    <p>{this.state.weather.temp}°F </p>
                    <p> {this.state.weather.general}</p>
                    <img alt="icon depiction of the the api's weather description" src={`http://openweathermap.org/img/w/${this.state.weather.icon}.png`} />
                    
                    <p>{this.state.weather.description} </p>
                    <p>humidity: {this.state.weather.humidity}%</p>
                    <p>wind speed: {this.state.weather.windSpeed}</p>
            
                </WeatherContainer>
             
             
                <TrailListContainer>
                <TrailList parkId={this.state.park.id} trails={this.state.park.trails} deleteATrail={this.deleteATrail}/>

                <ButtonDiv>
                    <AddTrailButton 
                    
                    onClick={this.toggleShowNewTrailForm}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                   <span></span> add new trail
                    </AddTrailButton> 
                </ButtonDiv>

                </TrailListContainer>

                {this.state.showNewTrailForm ? <NewTrailForm 
                park_id={this.state.park.id} 
                getOnePark={this.getOnePark} 
                addTrail={this.addTrail}
                toggleShowNewTrailForm={this.toggleShowNewTrailForm}
                /> : null}


                

            </ParkContainer>
        );
    }
}

export default Park;



// sunset to display later

                {/* <p>sunset: <Moment unix tz="America/New_York">{this.state.weather.sunset}</Moment></p> */}
