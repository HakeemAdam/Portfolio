import React from 'react'
import { Text, StyledDiv } from './Styled'
import Typist from 'react-typist'

const Types = ['Installation', 'Websites', 'Sound Pieces', 'Sketches']
const getTitles = () => {
    Types.map(types => types)
}

const KeyWord = () => {
    return (
        <h2 onClick={getTitles()}>{ }</h2>
    )
}

const Title = () => {
    return (
        <StyledDiv>
            <Typist>
                <Text>Hi my name is Hakeem Adam. I am a media artist and here live some websites i have made </Text>
            </Typist>
        </StyledDiv >
    )
}

export default Title