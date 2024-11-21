import './Home.css'
import Header from '../../components/Header/Header'

import React from 'react'
import LatestCollection from '../../components/LatestCollection/LatestCollection'
import BestSeller from '../../components/BestSeller/BestSeller'
import ProvideService from '../../components/ProvideService/ProvideService'


const Home = () => {
  return (
    <div>
      <Header/>
      <LatestCollection/>
      <BestSeller/>
      <ProvideService/>
      
    </div>
  )
}

export default Home