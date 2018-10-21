import styled from 'styled-components'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
import { useNavigate } from 'react-router-dom'

const FooterContainer = styled.footer`
  width: 100%;
  /* margin-top: 9rem; */
  margin-bottom: 0.5rem;
  color: white;
`
const ContainerDiv = styled.div`
  @media screen and (max-width: 950px) {
    padding: 0 1rem;
  }
`

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #be0a0a;
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

  @media screen and (max-width: 820px) {
    width: 9rem;
    height: 9rem;
  }
`
const SocialMediaContainer = styled.div`
  /* height: 10rem; */
  margin-top: 0.5rem;
`
const SocialHeading = styled.h1`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 1000;
`
const SocialGridContainer = styled.div`
  width: 33%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 820px) {
    width: 80%;
  }
`
const SoicalIconContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`

const LastDiv = styled.div<{ width: Number }>`
  display: flex;
  flex-direction: ${({ width }) => (width < 768 ? 'column' : 'row')};
  justify-content: ${({ width }) => (width < 768 ? 'justify-center' : 'space-between')};
  /* height: 5rem; */

  margin-bottom: ${({ width: w }) => (w < 786 ? '50px' : '')};

  img {
    max-width: 150px;
    margin: 0 auto;
  }
`

const LastInfo = styled.p<{ width: Number }>`
  /* width: ${({ width }) => (width < 768 ? '100%' : '75%')}; */
  width: 100%;
  display: flex;
  justify-content: ${({ width }) => (width < 768 ? 'center' : 'end')};
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1.4rem;
  text-align: center;
  /* margin-bottom: 100px; */

  @media screen and (max-width: 820px) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`
const Footer = () => {
  const { width } = useWindowSize()
  const navigate = useNavigate()
  return (
    <FooterContainer className="mt-small ">
      <ContainerDiv className="section-wrapper">
        <SocialMediaContainer>
          <SocialGridContainer>
            <SoicalIconContainer>
              <a href="https://twitter.com/RedSaintNFT" target="_blank">
                <AiFillTwitterCircle />
              </a>
            </SoicalIconContainer>
            <SoicalIconContainer>
              <a href="https://discord.gg/Ekz27dFKwR" target="_blank">
                <FaDiscord />
              </a>
            </SoicalIconContainer>
            <SoicalIconContainer>
              <a href="https://t.me/redsaintnft" target="_blank">
                <FaTelegram />
              </a>
            </SoicalIconContainer>
          </SocialGridContainer>
        </SocialMediaContainer>

        <LastDiv width={width}>
          <img
            style={{ cursor: 'pointer' }}
            src="/images/logo.png"
            alt=""
            onClick={() => {
              navigate('/')
              window.scrollTo(0, 0)
            }}
          />
          <LastInfo width={width}>THE SCARF NINJA</LastInfo>
        </LastDiv>
      </ContainerDiv>
    </FooterContainer>
  )
}

export default Footer
