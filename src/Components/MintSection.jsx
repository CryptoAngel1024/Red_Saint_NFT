import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

const SectionMint = styled.div`
  width: 100%;
  margin-top: 15px;
  background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%);
  /* padding: 6rem; */
  padding: ${({ width: w }) => (w <= 768 ? '4rem' : '6rem')};
  /* padding-top: 3rem; */
  font-family: 'Poppins';
`
const Wrapper = styled.div`
  min-width: 50%;
  margin: 10px auto;
  text-align: center;
`
const MintTitle = styled.h2`
  /* font-size: 3.5rem; */
  color: white;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.3;
  /* letter-spacing: 2px; */
  line-height: ${({ width: w }) => (w < 768 ? '40px' : '80px')};
  @media screen and (max-width: 1100px) {
    font-size: 2rem;
    /* letter-spacing: normal; */
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2rem;
  }
`
const MintButton = styled.button`
  background: #fff;
  min-width: 13%;
  min-height: 50px;
  max-width: 18%;
  color: green;
  font-weight: bold;
  font-size: 1.3rem;
  @media screen and (max-width: 820px) {
    min-width: 39%;
    min-height: 45px;
    max-width: 55%;
    font-size: 1.2rem;
  }
`
const MintSection = () => {
  const { width } = useWindowSize()
  return (
    <>
      <SectionMint width={width}>
        <Wrapper>
          <MintTitle className="primary-heading" style={{ color: 'white' }} width={width}>
            Catch the Ninja
          </MintTitle>
          <MintButton className="mt-2">
            <Link to="/mint" onClick={() => window.scrollTo(0, 0)}>
              Mint Now
            </Link>
          </MintButton>
        </Wrapper>
      </SectionMint>
    </>
  )
}

export default MintSection
