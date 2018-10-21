import React from 'react'
import styled from 'styled-components'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
const Divider = styled.hr`
  width: 300px;
  border: 2px solid white;
  text-align: center;
  margin: 1rem auto;
  background-color: white;
`

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 9rem;
  margin-bottom: 2rem;
  color: black;
`
const ContainerDiv = styled.div`
  width: 100%;
  padding: 0 8rem;
  color: white;

  @media screen and (max-width: 950px) {
    padding: 0 1rem;
  }
`
const SubDiv = styled.div`
  padding-top: 1rem;
`

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: white;
`
export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
const Image = styled.img`
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  background-color: #be0a0a;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 820px) {
    width: 9rem;
    height: 9rem;
  }
`
export default function MeetTeam() {
  const { width } = useWindowSize()

  return (
    <FooterContainer>
      <ContainerDiv>
        <SubDiv>
          <Header>Meet Our Team</Header>
          <Divider />
          <GridContainer>
            <div className="mt-4">
              <div className="mx-auto">
                <Image src="/images/team-01.webp" alt="" />
              </div>
              <p className="text-center p-1 fs-4 fw-bold">Blood Saint</p>
              <p className="text-center p-1 fs-5 fw-normal">Artist</p>
            </div>
            <div className="mt-4">
              <div className="mx-auto">
                <Image src="/images/team-03.webp" alt="" />
              </div>
              <p className="text-center p-1 fs-4 fw-bold">Master Saint</p>
              <p className="text-center p-1 fs-5 fw-normal">Developer</p>
            </div>
            <div className="mt-4">
              <div className="mx-auto">
                <Image src="/images/member3.webp" alt="" />
              </div>
              <p className="text-center p-1 fs-4 fw-bold">Big Saint</p>
              <p className="text-center p-1 fs-5 fw-normal">Marketer</p>
            </div>
          </GridContainer>
        </SubDiv>
      </ContainerDiv>
    </FooterContainer>
  )
}
