import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/freeBook'
import Footer from '../components/Footer'

function home() {
    return (
        <>
            <Navbar />
            <Banner />
            <FreeBook />
            <Footer />
        </>
    )
}

export default home
