import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const MarketplaceContainer = styled.div`
  width: 100%;
  height: 80vh;
  // background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.4rem;
`

const Placeholder = props => {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle}-Red Saint</title>
      </Helmet>

      <MarketplaceContainer className="">
        <Title className="text-uppercase section-wrapper text-white fs-1 text-center">{props.title}</Title>
      </MarketplaceContainer>
    </>
  )
}

export default Placeholder
