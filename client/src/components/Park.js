import React, { Component } from 'react';
import axios from 'axios'
import Moment from 'react-moment';
import 'moment-timezone';
import CommentList from './Comments/CommentList'
import styled from 'styled-components';
import CommentForm from './Comments/CommentForm'
import TrailList from './Trails/TrailList'
import Trail from './Trails/Trail'
import NewTrailForm from './Trails/NewTrailForm'



const ParkContainer = styled.div`
/* font-family: 'Actor', sans-serif; */
text-align: center;
/* margin: 10px; */
`

const ParkName = styled.h1`
font-family: 'Arimo', sans-serif;
font-weight: 25px;
`

const Description = styled.div`
margin: 30px 0;
`

const WeatherContainer = styled.div`
font-family: 'Kameron', serif;
background-color: white;
max-width: 300px;
`


const ParkImageMain = styled.div`
img{
    max-height: 400px;
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
                   <WeatherContainer>
                    <h5>Current Weather</h5>
                <p>{this.state.weather.temp}°F </p>
                <p> {this.state.weather.general}</p>
                <img src={`http://openweathermap.org/img/w/${this.state.weather.icon}.png`} />
                
                <p>{this.state.weather.description} </p>
                <p>humidity: {this.state.weather.humidity}%</p>
                <p>wind speed: {this.state.weather.windSpeed}</p>
            
                </WeatherContainer>

                <ParkName>{this.state.park.name}</ParkName>

              <ParkImageMain><img src = {this.state.park.image} /></ParkImageMain>  
                
                <p>{this.state.park.address}</p>
                <Description>{this.state.park.description}</Description>

             
             

                <TrailList parkId={this.state.park.id} trails={this.state.park.trails} deleteATrail={this.deleteATrail}/>
                <button onClick={this.toggleShowNewTrailForm}>Submit a new trail</button>

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
