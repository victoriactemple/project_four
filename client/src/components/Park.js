import React, { Component } from 'react';
import axios from 'axios'
import CommentList from './Comments/CommentList'
import styled from 'styled-components';


const ParkContainer = styled.div`
text-align: center;
`

const Description = styled.div`
margin: 30px 0;
`
class Park extends Component {
        state ={
            park: {
                comments: [],
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
            await this.setState({park: res.data})
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


                <CommentList comments={this.state.park.comments} toggleCommentForm={this.toggleCommentForm} showNewCommentForm={this.state.showNewCommentForm}/>
                
                


            </ParkContainer>
        );
    }
}

export default Park;