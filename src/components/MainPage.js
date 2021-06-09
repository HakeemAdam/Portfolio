import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Title from './Title'
import { Graphic } from './Graphic'
import Content from './Content'



const MainPage = () => {

    const [isShown, setIsShown] = useState(true)

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <>
                            <Graphic onClick={() => setIsShown(false)} />
                            {isShown && <Content />}
                            <Title />
                        </>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MainPage