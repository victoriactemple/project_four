import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import EditTrailForm from './EditTrailForm'
import TrailCommentList from '../TrailComments/TrailCommentList'
import TrailCommentForm from '../TrailComments/TrailCommentForm'
import styled from 'styled-components';


const TrailImage = styled.div`
img {
    max-width: 500px;
    border-radius: 3px;
}

padding-bottom: 70px;
`

const ParkName = styled.h2`
text-align: center;
font-family: 'Arimo', sans-serif;
font-weight: 25px;
`

const TrailContainer = styled.div`
@media only screen and (min-width: 1024px);
margin-left: 60px;
margin-right: 60px;
text-align: center;

`

const Button = styled.button`
cursor: pointer;
background: white;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
&:hover{
    box-shadow: 1px 1px 2px;
}
a{
    text-decoration: none;
    color: black;
}
&:focus{
    outline: none;
}
`
/* const TrailInfo = styled.div`
@media only screen and (min-width: 1024px);
font-family: "Oxygen", sans-serif;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-left: 250px;
margin-right: 250px;
margin-bottom: 20px;
padding: 15px;
max-width: 550px;

background-color: white;
img{
    max-width: 80px;
}
` */

const TrailInfo = styled.div`
/* @media only screen and (min-width: 500px); */
font-family: "Oxygen", sans-serif;
display: flex;

align-items: center;
justify-content: space-around;
/* margin: 40px 10px 40px 15px; */
margin: auto;
min-height: 60px;
padding: 20px 10px 9px 20px;
max-width: 550px;
border: 2px solid #d7d7d7;
border-radius: 2px;
background-color: white;
img{
    max-width: 80px;
}
`
/* const TrailInfoContainer = styled.div`
margin: 0 auto;
` */

const Description = styled.div`
text-align: left;
margin-left: 100px;
margin-right: 100px;
margin-bottom: 20px;
margin-top: 40px;
padding: 15px;
background-color: rgba(212, 209, 188, .2);
/* border: solid 1px; */
`


const TrailCommentFormContainer = styled.div`

`



class Trail extends Component {
    state = {
        park: {},
        trail: {
            trail_comments: []
        },
        redirectToPark: false,
        editTrailDetals: false,
        showCreateATrail: false,
        showCreateComment: false
    }

    componentWillMount() {
        this.getTrailAndComments()
    }


    getTrailAndComments = async (trail_id) => {
        try {
            const { park_id, trail_id } = this.props.match.params
            // console.log(trail_id)
            const res = await axios.get(`/api/parks/${park_id}/trails/${trail_id}`)
            this.setState({ trail: res.data })
        } catch (error) {
            await this.setState({ error: error.message })
        }
    }


    deleteATrail = async () => {
        try {
            // console.log("i work")
            const { park_id, trail_id } = this.props.match.params
            // console.log(park_id, trail_id)
            const response = await axios.delete(`/api/parks/${park_id}/trails/${trail_id}`)

            this.setState({
                park: response.data,
                redirectToPark: true
            })
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    toggleEditTrail = () => {
        this.setState({ editTrailDetails: !this.state.editTrailDetails })
    }

    toggleAddComment = () => {
        this.setState({ showCreateComment: !this.state.showCreateComment })
    }




    render() {
        if (this.state.redirectToPark) {
            return (
                <Redirect to={`/parks/${this.state.park.id}`} />
            )
        }
        if (!this.state.editTrailDetails) {
            return (
                <div>
                 <TrailContainer>
                    <ParkName>{this.state.trail.name}</ParkName>
                     <TrailImage><img src={this.state.trail.image} /> </TrailImage>
                    
                    

                        <TrailInfo>
                        <span>distance: 
                        <p> {this.state.trail.distance} miles</p></span>
                            
                            
                            <img src={this.state.trail.difficulty} />
                            <img src = {this.state.trail.pet_friendly} />
                        </TrailInfo>
                   

                        <Description>
                            <p>{this.state.trail.description}</p>
                        </Description>

                    
                    
                    <TrailImage><img src={this.state.trail.elevation_profile} /></TrailImage>

                   


                    <Button onClick={this.deleteATrail}> 
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                    </Button>
                    <Button><Link to={{
                        pathname: `/parks/${this.state.trail.park_id}/trails/${this.state.trail.id}/edit`,
                        state: { trails: this.state.trail }
                    }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link></Button>

                    {/* <Button> <Link to={{
                        pathname: `/parks/${this.state.trail.park_id}`,
                    }}>all parks</Link></Button> */}

                

                    <TrailCommentList comments={this.state.trail.trail_comments}
                        toggleAddComment={this.toggleAddComment} />

                 
                 <TrailCommentFormContainer>

                    {this.state.showCreateComment ? <TrailCommentForm
                        getTrailAndComments={this.getTrailAndComments}
                        toggleAddComment={this.toggleAddComment}
                        trailComments={this.state.trail_comments}
                        trail={this.state.trails}
                        park_id={this.props.match.params.park_id}
                        trail_id={this.state.trail.id}

                    /> : null}
                    
                    </TrailCommentFormContainer>

                   
                </TrailContainer>
                </div>
            )
        }

    }
}

export default Trail;

