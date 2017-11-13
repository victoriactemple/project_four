import React, { Component } from 'react';
import axios from 'axios'
import CommentList from './Comments/CommentList'
import styled from 'styled-components';
import CommentForm from './Comments/CommentForm'
import TrailList from './Trails/TrailList'


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
                parkComments: [],
                showNewCommentForm: false
            }
        }
        componentWillMount() {
            const park_id = this.props.match.params.park_id
            this.getOnePark(park_id)
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

        toggleCommentForm = () => {
            this.setState({showNewCommentForm: !this.state.showNewCommentForm})
        }


    render() {
        return (
            <ParkContainer>
                <h1>{this.state.park.name}</h1>
                <img src = {this.state.park.image} />
                <p>{this.state.park.address}</p>
                <Description>{this.state.park.description}</Description>

                <TrailList trails={this.state.park.trails}/>


            </ParkContainer>
        );
    }
}

export default Park;




                {/* <CommentList comments={this.state.park.parkComments} toggleCommentForm={this.toggleCommentForm} showNewCommentForm={this.state.showNewCommentForm}/>
                
                {this.state.showNewCommentForm ? <CommentForm toggleCommentForm={this.toggleShowNewForm}/> : null}

                 */}