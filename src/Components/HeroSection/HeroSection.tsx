import React from 'react'
import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

const SectionContainer = styled.div`
  width: 100%;
  /* background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%); */
`

const SectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3.5rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 1500px) {
    padding-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0rem;
    padding-bottom: 1rem;
  }
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`
const LeftContainer = styled.div`
  width: 40%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  @media screen and (max-width: 1280px) {
    padding-top: 1rem;
    padding: 3rem;
  }
  @media screen and (max-width: 890px) {
    padding: 2.5rem;
    padding-top: 3rem;
    padding-bottom: 1rem;
    width: 100%;
  }
`
const RightContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.5rem;

  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 890px) {
    padding: 2rem;
    padding-top: 0rem;
    width: 100%;
    padding-bottom: 2.5rem;
  }
  @media screen and (max-width: 550px) {
    margin-top: 0;
  }
`
export const RedSaint = styled.h1`
  font-size: 3.5rem;
  text-align: left;
  color: white;
  font-weight: 800;
  letter-spacing: 0.3rem;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 1100px) {
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2.3rem;
  }
`
const TheScrafNinja = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  color: white;
  font-weight: 500;
  letter-spacing: 0.1em;

  @media screen and (max-width: 1100px) {
    font-size: 1.8rem;
    letter-spacing: normal;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.3rem;
  }
`

const TitleHr = styled.hr`
  color: white;
  border: 2px solid white;
  background-color: white;
  width: 95%;
  margin: 1rem 0;

  @media screen and (max-width: 820px) {
  }
`
const InfoText = styled.p`
  color: white;
  text-align: start;
  padding: 2rem 0;
  font-size: 1.3rem;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 820px) {
    font-size: 1.1rem;
  }
`

const MintButton = styled.button`
  background: linear-gradient(to bottom, #00ff47 0%, #005f04 100%);

  min-width: 40%;
  min-height: 50px;
  max-width: 55%;
  border-radius: 30px;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 820px) {
    min-width: 39%;
    min-height: 45px;
    max-width: 55%;
    font-size: 1.2rem;
  }
`

const Links = styled(Link)`
  &:hover {
    color: #fff !important;
    text-decoration: none !important;
  }
`

const SectionImage = styled.img`
  display: grid;
  place-items: center;
  width: 65%;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    height: auto;
  }
  /* width: 40rem;
  height: 40rem; */
`

const HeroSection = () => {
  return (
    <>
      <SectionContainer className="bg-main ">
        <SectionOne>
          <LeftContainer>
            <RedSaint>RED SAINT</RedSaint>
            <TheScrafNinja>The Scarf Ninja</TheScrafNinja>
            <TitleHr />
            <InfoText>The justice devil who sends his enemy to hell. A collection of 3,578 scarf ninjas. Mint and collect the one and only Red Saint.</InfoText>
            <MintButton>
              <Links to="/mint">Mint Now</Links>
            </MintButton>
          </LeftContainer>

          <RightContainer>
            <Tilt perspective={700} tiltMaxAngleY={8} tiltMaxAngleX={8}>
              <SectionImage src="/images/hero.webp" alt="no-img"></SectionImage>
            </Tilt>
          </RightContainer>
        </SectionOne>
      </SectionContainer>
    </>
  )
}

export default HeroSection
