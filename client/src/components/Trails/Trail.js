import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import EditTrailForm from './EditTrailForm'
import TrailCommentList from '../TrailComments/TrailCommentList'
import TrailCommentForm from '../TrailComments/TrailCommentForm'
import styled from 'styled-components';


const TrailImage = styled.div`
img {
    max-width: 400px;
}

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
                    <h2>{this.state.trail.name}</h2>
                    <p>distance: {this.state.trail.distance} miles</p>
                    <p>difficulty: {this.state.trail.difficulty}</p>
                    {/* <p>pet_friendly: {this.state.trail.pet_friendly}</p> */}
                    <TrailImage><img src={this.state.trail.elevation_profile} /></TrailImage>

                    <TrailImage><img src={this.state.trail.image} /> </TrailImage>


                    <button onClick={this.deleteATrail}>Delete Trail</button>
                    <Link to={{
                        pathname: `/parks/${this.state.trail.park_id}/trails/${this.state.trail.id}/edit`,
                        state: { trails: this.state.trail }
                    }}>Edit Trail</Link>

                    <Link to={{
                        pathname: `/parks/${this.state.trail.park_id}`,
                    }}>Back to Parks </Link>



                 

                    {this.state.showCreateComment ? <TrailCommentForm
                        getTrailAndComments={this.getTrailAndComments}
                        toggleAddComment={this.toggleAddComment}
                        trailComments={this.state.trail_comments}
                        trail={this.state.trails}
                        park_id={this.props.match.params.park_id}
                        trail_id={this.state.trail.id}

                    /> : null}

                    <TrailCommentList comments={this.state.trail.trail_comments}
                        toggleAddComment={this.toggleAddComment} />

                </div>
            )
        }

    }
}

export default Trail;

