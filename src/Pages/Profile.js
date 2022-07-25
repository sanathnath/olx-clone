import React from 'react'
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Userprofile from '../Components/UserProfile/Userprofile'

function Profile() {
    return (
        <div>
            <Header/>
            <CategoryHeader/>
            <Userprofile/>
            <Footer/>
        </div>
    )
}

export default Profile
