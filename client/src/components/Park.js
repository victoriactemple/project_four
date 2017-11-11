import React from 'react';

const Park = () => {
    state ={
        park: {},
        comments: []
    }
componentWillMount() {
    const park_id = this.props.match.params.id
    this.fetchParkAndCommentData(park_id)
}

fetchParkAndCommentData = async (park_id) => {
    try {
        const parkResponse = await axios.get(`/api/parks/${park_id}`)
        await this.setState({
            park: parkResponse.data
        })
    } catch(error) {
        await this.setState({error: error.message})
    }
}

    return (
        <div>
            <img src = {this.state.park.image} />
        </div>
    );
};

export default Park;