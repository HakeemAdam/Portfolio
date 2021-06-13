import React from 'react'
import { Text, StyledDiv, NameText } from './Styled'
import Typist from 'react-typist'


const NameSpacer = () => {
    return (
        <NameText>
            <a href="https://hakeemadam.info/" target="_blank" rel="noopener noreferrer">Hakeem Adam</a>
        </NameText>
    )
}


const Title = () => {
    return (
        <StyledDiv>
            <Typist cursor={{ show: false, }} stdTypingDelay={100} >
                <Text>Hi my name is<NameSpacer /></Text>
                <Text>I am a media artist and here are some websites I have made</Text>
                <Text>I use JavaScript, Python, Java, MaxMSP + C in my work</Text>
                <Text>For Frontend Development I use React, Django, Flask, Vanilla JS, Styled Components, HTML5, CSS, Three.JS, PixiJS, P5JS + Node.js</Text>
                <Text>Contact me <a href="https://hakeemadam.info/something-interesting-to-share/" target="_blank" rel="noopener noreferrer">Here</a></Text>
                <Text><a href="https://hakeemadam.info/" target="_blank" rel="noopener noreferrer">Github</a></Text>
            </Typist >
        </StyledDiv>
    )
}

export default Title