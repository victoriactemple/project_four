// COMPONENT FOR PARK COMMENTS, CURRENTLY NOT BEING USED


// import React, { Component } from 'react';
// import axios from 'axios'

// class CommentForm extends Component {
//     state ={
//         newComment: {
//         title: '',
//         content: ''
//         }
//     }
// componentWillMount () {
//     this.setState({
//         title: this.props.title,
//         content: this.props.content
//     })
// }

// handleInput = (event) => {
//     const attributeToChange = event.target.name
//     const newValue = event.target.value

//     const newState = {...this.state}
//     newState[attributeToChange] = newValue
//     this.setState(newState)
// }

// // handleSubmit = (event) => {
// //     event.preventDefault() 
// //     const { park_id } = this.props.match.params

// //     const response = await axios.post(`/api/parks/${park_id}`, {
// //         comment: this.state
// //     })
// //     thisSetState({})
// // }

// handleSubmit = async (event) => {
//     try {
//         event.preventDefault()
//         const { park_id } = this.props.match.params
//         const emptyForm = {
//             title: '',
//             description: ''
//         }
//         const response = await axios.post(`/api/parks/${park_id}/comments`, {
//             comment: this.state.newComment
//         })
//         this.setState({ redirectToPostList: true, 
//             newPostId: response.data._id, 
//             newPost: emptyForm })


//     } catch (error) {
//         console.log(error)
//     }

// }



//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input 
//                         type="text"
//                         name="title"
//                         value={this.state.title}
//                         onChange={this.handleInput}
//                         />
//                     </div>
//                     <div>
//                         <textarea 
//                         type="text"
//                         name="content"
//                         value={this.state.content}
//                         onChange={this.handleInput}
//                         />
//                     </div>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default CommentForm;