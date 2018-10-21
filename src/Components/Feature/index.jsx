import React from 'react'
import styled from 'styled-components/macro'
import useWindowSize from '../../hooks/useWindowSize'
import FeatureImage from '../FeatureImage'

const Feature = () => {
  const { width } = useWindowSize()

  return (
    <LinearGradientWithSkew width={width}>
      <div className="nonSkew flexCenter section-wrapper ">
        <div style={{ width: '100%' }}>
          <h1 className="primary-heading mt-large" style={{ color: 'white' }}>
            Collection
          </h1>
          <Divider />
          <div className="featureImage__Container  mt-small" style={{ marginBottom: '-15vh' }}>
            {/* <Fade triggerOnce cascade> */}
            <FeatureImage src="/images/5.webp" alt="Card Items 1" />
            <FeatureImage src="/images/13.webp" alt="Card Items 2" />
            <FeatureImage src="/images/23.webp" alt="Card Items 3" />
            <FeatureImage src="images/47.webp" />
            <FeatureImage src="images/48.webp" />
            <FeatureImage src="images/51.webp" />
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </LinearGradientWithSkew>
  )
}

export default Feature

const LinearGradientWithSkew = styled.div`
  min-height: 60vh;

  margin-top: -20px;
  .nonSkew {
    .featureImage__Container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 4rem;
      gap: 2rem;
    }
  }
`

export const Divider = styled.hr`
  min-width: 300px;
  max-width: 600px;
  width: 50%;
  height: 0.3rem !important;
  text-align: center;
  margin: 0.5rem auto;
  background-color: #ffffff;
  letter-spacing: 5px;
`
