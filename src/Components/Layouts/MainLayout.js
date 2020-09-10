import React from 'react'
import Header from '../LandingPage/Header'
import Footer from '../LandingPage/Footer'

export default ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}
