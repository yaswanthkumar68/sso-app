import React from 'react'
import Routing from './components/routes/Routing'
import { BrowserRouter } from 'react-router-dom'

const App = (props) => {

    return(
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    )
}
export default App