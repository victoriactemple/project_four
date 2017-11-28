import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';

const TrailCommentContainer = styled.div`
font-family: 'Oxygen', sans-serif;
`

const Title = styled.h3`

`


const TrailComment = (props) => {
    return (
        <TrailCommentContainer>
        <Title>{props.title}</Title>
        <p>{props.content}</p>
        <p>posted: <Moment fromNow>{props.created_at}</Moment></p>

        </TrailCommentContainer>
    );
};

export default TrailComment;