import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Header from '../Dashboard/Header'

export default ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />           
                { children }
            </div>


        </>
    )
}
