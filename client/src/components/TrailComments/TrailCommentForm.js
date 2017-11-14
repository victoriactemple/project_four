import React, { Component } from 'react';
import axios from 'axios'

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
const res = await axios.post(`/api/parks/${park_id}/trails/${trailId}/trail_comments`, payload)
this.setState({
                trailComment: emptyForm
})
this.props.toggleAddComment()
this.props.getTrailAndComments()

}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        onChange={this.handleChange} 
                        type="text"
                        name="title"
                        value={this.state.trailComment.title}
                        placeholder="title"
                        />
                    </div>
                    <div>
                        <textarea 
                        onChange={this.handleChange}
                        type="text"
                        name="content"
                        value={this.state.trailComment.content}
                        placeholder="your comments"
                        />
                    </div>

                    <div>
                       <button>submit</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default TrailCommentForm;
