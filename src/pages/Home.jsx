import React from 'react'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import Feature from '../components/feature/Feature'
import Info from '../components/info/Info'
import Instructor from '../components/instructor/Instructor'
import Company from '../components/company/Company'
import Learners from '../components/learn/Learners'
import Question from '../components/question/Question'
import LearnInfo from '../components/learn/LearnInfo'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <Feature />
            <Info />
            <Instructor />
            <Company />
            <Learners />
            <Question />
            <LearnInfo />
            <Footer />
        </>
    )
}

export default Home