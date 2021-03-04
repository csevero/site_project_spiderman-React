import React from 'react'
import Routes from './routes'

import './assets/styles/global.css'
import BgLoader from './components/Bg Loader'

function App() {
    return (
        <>
            <BgLoader />
            <Routes />
        </>
    )
}

export default App
