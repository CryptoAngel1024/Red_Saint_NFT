import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import ConnectWallet from '../../comp/wallet'
import { useNavigate } from 'react-router-dom'

const NavBar = styled.nav`
  width: 100%;
  /* background: rgb(193, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(193, 0, 0, 1) 0%,
    rgba(66, 1, 0, 1) 0%,
    rgba(193, 0, 0, 1) 100%
  ); */
  height: 100px;
`

const NavContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  background: transparent;
  display: flex;
  padding: 1rem;
  padding-top: 1.4rem;
  height: 100px;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 1045px) {
    width: 100%;
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
  }
`
const LogoContainer = styled.img`
  width: 80px;
  height: 80px;
  margin-top: -0.5rem;

  object-fit: cover;

  @media screen and (max-width: 820px) {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 880px) {
    display: none;
  }
`
const HamburgerIcon = styled.button`
  display: none;
  @media screen and (max-width: 880px) {
    display: block;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
  }
`
const MobileMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 880px) {
    display: block;
    width: 100%;
    background: transparent;
    /* background: linear-gradient(
      90deg,
      rgba(193, 0, 0, 1) 0%,
      rgba(66, 1, 0, 1) 0%,
      rgba(193, 0, 0, 1) 100%
    ); */
    background: #380616;
  }
`
const MobileMenuLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 2.2rem;

  @media screen and (max-width: 1045px) {
    padding: 0 0.5rem;
  }
`

const MobileMenuLinksItem = styled.li`
  width: 100%;
  height: 50px;
  text-align: center;
  background: transparent;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #8c163c;
    border-radius: 4px;
    transition: 0.4s ease-in-out;
    color: #fff !important;
    text-decoration: none !important;
  }
`

const NavLink = styled.ul`
  list-style: none;
  display: flex;
  cursor: pointer;
`
const NavLinkItem = styled.li`
  margin: 1rem 0.3rem;
  width: ${props => props.width}px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
  color: white;

  @media screen and (max-width: 1245px) {
    /* width: 105px; */
    font-size: 1rem;
    margin: 0;
  }

  &:hover {
  }
`

const TokenSection = styled.li`
  margin: 1rem 0.3rem;
  width: ${props => props.width}px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 1245px) {
    /* width: 105px; */
    font-size: 1rem;
    margin: 0;
  }

  img {
    width: 30px;
    height: 30px;
  }
`
const Home = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 3px;

  border-bottom: ${props => (props.path === '/' ? '5px solid white' : 'none')};
`
const Mint = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 3px;

  border-bottom: ${props => (props.path === '/mint' ? '5px solid white' : 'none')};
`
const MySaints = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 3px;
  border-bottom: 4px solid #da0000;
  border-bottom: ${props => (props.path === '/mysaints' ? '5px solid white' : 'none')};
`
const Marketplace = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 3px;
  border-bottom: 4px solid white;
  border-bottom: ${props => (props.path === '/marketplace' ? '5px solid white' : 'none')};
`
const Rarities = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 3px;
  border-bottom: 4px solid white;
  border-bottom: ${props => (props.path === '/rarities' ? '5px solid white' : 'none')};
`
const FanFiction = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 3px;
  border-bottom: 4px solid white;
  border-bottom: ${props => (props.path === '/fanfiction' ? '5px solid white' : 'none')};
`

const Links = styled(Link)`
  text-decoration: none !important;
  &:hover {
    color: #fff !important;
    text-decoration: none !important;
  }
`

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <NavBar className="bg-main">
        <NavContainer>
          <Link to="/" className="flex items-center">
            <LogoContainer src="/images/logo.png" />
          </Link>
          <HamburgerIcon
            onClick={() => {
              setisOpen(!isOpen)
            }}
          >
            <GiHamburgerMenu />
          </HamburgerIcon>
          <NavLinksContainer>
            <NavLink>
              <NavLinkItem width={73}>
                <Mint path={location.pathname}>
                  <Links to="/mint">Mint</Links>
                </Mint>
              </NavLinkItem>
              <NavLinkItem width={115}>
                <MySaints path={location.pathname}>
                  <Links to="/mysaints">My Saints</Links>
                </MySaints>
              </NavLinkItem>

              <NavLinkItem width={97}>
                <Rarities path={location.pathname}>
                  <a target="_blank" href="http://rarity.redsaint.io/red-saint">
                    Rarities
                  </a>
                </Rarities>
              </NavLinkItem>
              <NavLinkItem width={145}>
                <Marketplace path={location.pathname}>
                  <Links to="/marketplace">Marketplace</Links>
                </Marketplace>
                {/* <a href="https://www.crosea.io/collection/0x5143748612D92023954fD2Df0cEaF69B1d3434b2" target="_blank">
                  Marketplace
                </a> */}
              </NavLinkItem>
              <NavLinkItem width={128}>
                <FanFiction path={location.pathname}>
                  <Links to="/fanfiction">Fan Fiction</Links>
                </FanFiction>
              </NavLinkItem>

              <TokenSection width={120}>
                <img src="/images/redtoken.svg" alt="logo" />
                <a
                  className="d-flex align-items-center gap-1 price "
                  style={{ fontWeight: 'bold' }}
                  href="https://dexscreener.com/cronos/0x2f99de5d74cf6422c94722e2406ec23a2cadcafc"
                  target="_blank"
                >
                  $RED
                </a>
              </TokenSection>
            </NavLink>
            <ConnectWallet />
          </NavLinksContainer>
        </NavContainer>
      </NavBar>
      {isOpen && (
        <MobileMenuContainer>
          <MobileMenuLinks
            onClick={() => {
              setisOpen(false)
            }}
          >
            <MobileMenuLinksItem>
              <Links to="/mint">Mint</Links>
            </MobileMenuLinksItem>
            <MobileMenuLinksItem>
              <Links to="/mysaints">My Saints</Links>
            </MobileMenuLinksItem>
            <MobileMenuLinksItem>
              <a target="_blank" href="http://rarity.redsaint.io/red-saint">
                Rarities
              </a>
            </MobileMenuLinksItem>
              {/* <a href="https://www.crosea.io/collection/0x5143748612D92023954fD2Df0cEaF69B1d3434b2" target="_blank">
                Marketplace
              </a> */}
            <MobileMenuLinksItem>
              <Links to="/marketplace">Marketplace</Links>
            </MobileMenuLinksItem>
                  
            <MobileMenuLinksItem>
              <Links to="/fanfiction">Fan Fiction</Links>
            </MobileMenuLinksItem>

            <MobileMenuLinksItem>
              <TokenSection width={120}>
                <img src="/images/redtoken.svg" alt="logo" />
                <a
                  className="d-flex align-items-center gap-1 price "
                  style={{ fontWeight: 'bold' }}
                  href="https://dexscreener.com/cronos/0x2f99de5d74cf6422c94722e2406ec23a2cadcafc"
                  target="_blank"
                >
                  $RED
                </a>
              </TokenSection>
            </MobileMenuLinksItem>
          </MobileMenuLinks>
          <div className="w-50 mx-auto">
            <ConnectWallet />
          </div>
        </MobileMenuContainer>
      )}
    </>
  )
}

export default Navbar
