import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Movie from './Movie'
import Search from './Search'

const Home = () => {

  return (
    <div>
    <Header/>
    <Search/>
    <Movie/>
    <Footer/>
  </div>
  )
}

export default Home