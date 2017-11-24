import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import Trail from './Trail'
import styled from 'styled-components';


const FormContainerParentContainer = styled.div`
max-width: 1000px;
max-height: 650px;
border: 1px solid rgba(87, 87, 87, .2); 
border-radius: 2px;
text-align: center;
margin: 40px auto;
box-shadow: .5px .5px .5px .5px;
`

const FormContainer = styled.div`
font-family: "Oxygen", sans-serif;
padding-top: 50px;
padding-bottom: 80px;
/* border: solid black 2px; */
max-width: 700px;
max-height: 500px;
margin: 0 auto;
/* pading: 0 1rem;  */
text-align: center;
background-color: white;
border-radius: 5px;
max-width: 500px;
max-height: 400px;
margin: 65px auto;
border: 1px solid rgba(87, 87, 87, .2); 
box-shadow: .5px .5px .5px .5px;
`


const Input = styled.input.attrs({
    
	margin: props => props.size || '1em',
	padding: props => props.size || '2em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: em;
	border: 2px solid ;
	border-radius: 3px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
    &:focus{
        outline: none;
    }
`

const SaveButton = styled.button`
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


class EditTrailForm extends Component {
        state={
            park: {},
            trail: {
                name: '',
                description: '',
                image: '',
                distance: '',
            },
            redirectToTrail: false
        }
componentWillMount() {
    console.log(this.props)
    if (this.props.location && this.props.location.state && this.props.location.state.trails){
        this.setState({trail: this.props.location.state.trails})
    } else {

    }
    
}


handleChange = (event) => {
    const attribute = event.target.name
    const trail = {...this.state.trail}

    trail[attribute] = event.target.value
    this.setState({trail: trail})
}

handleSubmit = async (event) => {
    try{
        event.preventDefault()
        const park_id  = this.state.trail.park_id
        const trail_id  = this.state.trail.id
        const clonedTrail = {...this.state.trail}
        
        const response = await axios.patch(`/api/parks/${park_id}/trails/${trail_id}` , {
         trail: clonedTrail
            
        })
    
        console.log(response)
        
        this.setState({trail: response.data, redirectToTrail: true})

    }
    catch(error) {
        console.log(error)
    }
}

    render() {
if (this.state.redirectToTrail) {
    const {park_id} = this.props.match.params
    const {trail_id} = this.props.match.params
    return <Redirect to={`/parks/${park_id}/trails/${trail_id}`} />
}
  
        return (
            <FormContainerParentContainer>
                    <FormContainer>
                <form onSubmit={this.handleSubmit}>
                <div>
                     <label htmlFor="name">name: </label>
                    <Input onChange={this.handleChange} type="text" name="name" value={this.state.trail.name} />
                </div>
                <div>
                    <label htmlFor="description">description: </label>
                    <Input onChange={this.handleChange} type="text" name="description" value={this.state.trail.description} />
                </div>
                <div>
                    <label htmlFor="image">image: </label>
                    <Input onChange={this.handleChange} type="text" name="image" value={this.state.trail.image} />
                </div>
                <div>
                    <label htmlFor="distance in miles">distance in miles: </label>
                    <Input onChange={this.handleChange} type="number" name="distance" value={this.state.trail.distance} />
                </div>
            

            <SaveButton><i class="fa fa-lock" aria-hidden="true"></i> save</SaveButton>
                </form>
                </FormContainer>
            </FormContainerParentContainer>
        );
    }
}

export default EditTrailForm;




