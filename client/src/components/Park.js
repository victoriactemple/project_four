import React, { Component } from 'react';
import axios from 'axios'
import CommentList from './Comments/CommentList'
import styled from 'styled-components';
import CommentForm from './Comments/CommentForm'
import TrailList from './Trails/TrailList'
import Trail from './Trails/Trail'
import NewTrailForm from './Trails/NewTrailForm'

const FillerDiv = styled.div`
height: 100px
`

const ParkContainer = styled.div`
text-align: center;
`

const Description = styled.div`
margin: 30px 0;
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
            const park_id = this.props.match.params.park_id
           await this.getOnePark(park_id)
            await this.getWeather()
        }
    
        getOnePark = async (park_id) => {
            try {

            const res = await axios.get(`/api/parks/${park_id}`)
            console.log(res.data)
            const newPark = res.data.park

            newPark.trails = res.data.trails

            await this.setState({park: newPark})
            console.log(res.data)
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
                description: response.data.weather.main,
                windSpeed: response.data.wind.speed

            }
            this.setState({weather: formattedResponse})

            console.log(response.data)
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
                <h1>{this.state.park.name}</h1>
                <img src = {this.state.park.image} />
                <p>{this.state.park.address}</p>
                <Description>{this.state.park.description}</Description>

                <div>
                    <h5>Current Weather</h5>
                <p>{this.state.weather.temp}°F </p>
                <p>{this.state.weather.description} </p>
                <p>humidity: {this.state.weather.humidity}%</p>
                <p>wind speed: {this.state.weather.windSpeed}</p>

                </div>
             

                <TrailList parkId={this.state.park.id} trails={this.state.park.trails} deleteATrail={this.deleteATrail}/>
                <button onClick={this.toggleShowNewTrailForm}>Submit a new trail</button>

                {this.state.showNewTrailForm ? <NewTrailForm park_id={this.state.park.id} getOnePark={this.getOnePark} addTrail={this.addTrail}/> : null}


                <FillerDiv></FillerDiv>

            </ParkContainer>
        );
    }
}

export default Park;




                {/* <CommentList comments={this.state.park.parkComments} toggleCommentForm={this.toggleCommentForm} showNewCommentForm={this.state.showNewCommentForm}/>
                
                {this.state.showNewCommentForm ? <CommentForm toggleCommentForm={this.toggleShowNewForm}/> : null}

                 */}


