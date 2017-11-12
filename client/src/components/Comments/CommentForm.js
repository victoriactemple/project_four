import React, { Component } from 'react';
import axios from 'axios'

class CommentForm extends Component {
    state ={
        title: '',
        content: ''
    }
componentWillMount () {
    this.setState({
        title: this.props.title,
        content: this.props.content
    })
}

handleInput = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const newState = {...this.state}
    newState[attributeToChange] = newValue
    this.setState(newState)
}

handleSubmit = (event) => {
    event.preventDefault() 
    const { park_id } = this.props.match.params
    
    const response = await axios.post(`/api/parks/${park_id}`, {
        comment: this.state
    })
    thisSetState({})
}


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        name="title"
                        value={thist.state.title}
                        onChange={this.handleInput}
                        />
                    </div>
                    <div>
                        <textarea 
                        type="text"
                        name="content"
                        value={thist.state.content}
                        onChange={this.handleInput}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;