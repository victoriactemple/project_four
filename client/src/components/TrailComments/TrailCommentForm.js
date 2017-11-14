import React, { Component } from 'react';

class TrailCommentForm extends Component {
    state={
        trailComment: {
            title: '',
            content: ''
        }

    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <input 
                        type="text"
                        name="title"
                        value={this.state.trailComment.title}
                        />
                    </div>
                    <div>
                        <input 
                        type="text"
                        name="content"
                        value={this.state.trailComment.content}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default TrailCommentForm;
