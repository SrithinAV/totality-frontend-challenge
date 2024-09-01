import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Cards from '../components/Cards'
import HouseList from '../components/HouseList'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <HouseList />
    </div>
  )
}

export default Home
