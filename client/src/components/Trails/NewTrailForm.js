import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';


const Input = styled.input.attrs({
    
	margin: props => props.size || '.5em',
	padding: props => props.size || '.5em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: 1em;
	border: 2px solid black;
	border-radius: 3px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
    
    &:focus{
        outline: none;
    }
`


// const TextArea = styled.textarea.attrs({
    
// 	margin: props => props.size || '1em',
// 	padding: props => props.size || '2em'
// })`
// 	color: black;
//     font-family: "Oxygen", sans-serif;
// 	font-size: 0.75em;
// 	border: 2px solid black;
// 	border-radius: 3px;

//     margin: ${props => props.margin};
//     padding: ${props => props.padding};
//     &:focus{
//         outline: none;
//     }
// `


const TrailFormContainer = styled.div`
text-align: center;
/* max-width: 900px; */
/* border: 1px solid rgba(87, 87, 87, .2);  */
border-radius: 3px;
padding-top: 10px;
`



const Button = styled.button`
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

class NewTrailForm extends Component {
    state ={
        newTrail: {
            name: '',
            description: '',
            image: '',
            distance: '',
        
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedTrail = { ...this.state.newTrail }
        updatedTrail[attribute] = event.target.value
        this.setState({ newTrail: updatedTrail })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { park_id } = this.props
        const emptyForm={
            name: '',
            difficulty: '',
            image: '',
            distance: ''
          }
        const res = await axios.post(`/api/parks/${park_id}/trails`, {
            trail: this.state.newTrail
        })
        this.setState({ 
            newTrailId: res.data._id, 
            newTrail: emptyForm})

        this.props.toggleShowNewTrailForm()
         this.props.getOnePark()      
         
    }
    
    
    render() {
        return (
            <TrailFormContainer>
                 <form onSubmit={this.handleSubmit}>
                <div>
                    <Input onChange={this.handleChange} type="text" name="name" value={this.state.newTrail.name} placeholder="name"/>
                </div>
                <div>
                    <Input onChange={this.handleChange} type="text" name="description" value={this.state.newTrail.description} placeholder="description" />
                </div>
                <div>
                    <Input onChange={this.handleChange} type="text" name="image" value={this.state.newTrail.image} placeholder="image"/>
                </div>
                <div>
                    <Input onChange={this.handleChange} type="number" name="distance" value={this.state.newTrail.distance} placeholder="distance"/>
                </div>


            <Button onClick={this.toggleEditTrail}>
            <i class="fa fa-lock" aria-hidden="true"></i> submit</Button>
           
            {/* <SaveButton><i class="fa fa-lock" aria-hidden="true"></i> save</SaveButton> */}
                </form>
            </TrailFormContainer>
        );
    }
}


export default NewTrailForm;