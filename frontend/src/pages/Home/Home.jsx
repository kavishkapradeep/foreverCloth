import './Home.css'
import Header from '../../components/Header/Header'

import React from 'react'
import LatestCollection from '../../components/LatestCollection/LatestCollection'
import BestSeller from '../../components/BestSeller/BestSeller'
import ProvideService from '../../components/ProvideService/ProvideService'
import Subcribe from '../../components/Subctribe/Subcribe'

const Home = () => {
  return (
    <div>
      <Header/>
      <LatestCollection/>
      <BestSeller/>
      <ProvideService/>
      <Subcribe/>
    </div>
  )
}

export default Home