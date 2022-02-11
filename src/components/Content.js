import React from 'react'
import { ContentContainer, ListItem, List } from './Styled'


//const Types = ['Ghana Airways', 'AFRIQ 360', 'Concrete Poetry', 'Sketches']


const Content = () => {


    return (
        <ContentContainer>
            <List>
                <ListItem>
                    <a href="https://ghanaairways.netlify.app/" target="_blank" rel="noopener noreferrer">Ghana Airways</a>
                </ListItem>
                <ListItem>
                    <a href="https://wizardly-brahmagupta-25676b.netlify.app/" target="_blank" rel="noopener noreferrer">Concrete Sketch #001</a>
                </ListItem>
                <ListItem>
                    <a href="https://afriq360.herokuapp.com/" target="_blank" rel="noopener noreferrer">Afri-Q360</a>
                </ListItem>
                <ListItem>
                    <a href="https://runnforrest.netlify.app/" target="_blank" rel="noopener noreferrer">Runn Forrest</a>
                </ListItem>
                <ListItem>
                    <a href="https://ghanaairwaystextgen.netlify.app/" target="_blank" rel="noopener noreferrer">Ghana Airways Text Generator</a>
                </ListItem>
                <ListItem>
                    <a href="https://onefifth.digital/" target="_blank" rel="noopener noreferrer">One Fifth of the Earth's Surface</a>
                </ListItem>
            </List>
        </ContentContainer>
    )
}

export default Content


// {Types.map(type => (
//     <ListItem key={type}>
//         {type}
//     </ListItem>
// ))}