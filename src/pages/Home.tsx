import React, { Fragment } from 'react'
import FaqSection from '../Components/FaqSection'
import Feature from '../Components/Feature/index'
import HeroSection from '../Components/HeroSection/HeroSection'
import RoadMap from '../Components/RoadMap'
import Video from '../Components/Video/Video'
import MintSection from '../Components/MintSection'
import MeetTeam from '../Components/Footer/MeetTeam'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Red Saint</title>
        <meta name="description" content="Home page of Red Saint" />
      </Helmet>
      <HeroSection />
      {/* <MintSection /> */}
      <Video />
      <Feature />
      <RoadMap />
      <FaqSection />
      <MeetTeam />
    </Fragment>
  )
}
export default Home
