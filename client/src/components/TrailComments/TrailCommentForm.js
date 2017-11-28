import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';

const Input = styled.input.attrs({
    
	margin: props => props.size || '.5em',
	padding: props => props.size || '.5em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: em;
	border: 2px solid black;
	border-radius: 3px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
    &:focus{
        outline: none;
    }
`


const TextArea = styled.textarea.attrs({
    
	margin: props => props.size || '1em',
	padding: props => props.size || '2em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: 0.75em;
	border: 2px solid black;
	border-radius: 3px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};

    &:focus{
        outline: none;
    }
`


const CommentFormContainer = styled.div`
text-align: center;
padding-top: 20px;
/* border: 1px solid rgba(87, 87, 87, .5);  */
border-radius: 3px;
`



const Button = styled.button`
cursor: pointer;
background: white;
color: black;
font-size: 1em;
margin: .6em;
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

class TrailCommentForm extends Component {
    state={
        trailComment: {
            title: '',
            content: ''
        }
    }

handleChange=(event) => {
    const attribute = event.target.name
    const newTrailComment = {...this.state.trailComment}
    newTrailComment[attribute] = event.target.value
    this.setState({trailComment: newTrailComment})
}

handleSubmit = async (event) => {
event.preventDefault()
const { park_id } = this.props
const  trailId = this.props.trail_id
const payload = {
    title: this.state.trailComment.title,
    content: this.state.trailComment.content,
    trail_id: trailId
}
console.log(trailId)
const emptyForm={
    title: '',
    content: ''
}
await axios.post(`/api/parks/${park_id}/trails/${trailId}/trail_comments`, payload)
this.setState({
                trailComment: emptyForm
})

this.props.toggleAddComment()
this.props.getTrailAndComments()
}

    render() {
        return (
            <CommentFormContainer>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <Input
                        onChange={this.handleChange} 
                        type="text"
                        name="title"
                        value={this.state.trailComment.title}
                        placeholder="title"
                        />
                    </div>
                    <div>
                        <TextArea 
                        onChange={this.handleChange}
                        type="text"
                        name="content"
                        value={this.state.trailComment.content}
                        placeholder="your comments"
                        />
                    </div>

                    <div>
                       <Button><i class="fa fa-lock" aria-hidden="true" title="save"></i> post</Button>
                       {this.props.signedIn ? <p>You must be signed in to leave a comment</p> : null}
                    </div>

                </form>
            </CommentFormContainer>
        );
    }
}

export default TrailCommentForm;
