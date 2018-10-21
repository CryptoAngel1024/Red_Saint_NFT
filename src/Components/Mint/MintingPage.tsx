import React, { useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem 3rem 5rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%);
`

const PageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'poppins';
  color: #fff;
  margin: 3rem 0;
  text-align: center;

  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`

const MintSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
const Image = styled.img`
  width: 50%;
  padding: 3rem;
  max-height: 600px;

  @media screen and (max-width: 820px) {
    width: 100%;
    padding: 1rem;
  }
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 3rem;
  @media screen and (max-width: 820px) {
    width: 100%;
    padding: 1rem;
  }
`

const Mint = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  padding: 0;
  @media screen and (max-width: 1000px) {
    font-size: 1.3rem;
  }
`
const MintPrice = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #00e738;
  padding: 0;

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`
const MintAdjust = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`
const PlusMinusBtn = styled.button`
  border: 3px solid #00f543;
  color: #00f543;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-weight: 800;

  @media screen and (max-width: 550px) {
    width: 20px;
    height: 20px;
  }
`
const PlusMinusText = styled.p`
  font-size: 1.4rem;
  position: relative;
  top: -0.5rem;

  @media screen and (max-width: 550px) {
    top: -0.45rem;
    font-size: 1rem;
  }
`

const MintAmount = styled.div`
  border-bottom: 3px solid #00f543;
  color: #fff;
  font-weight: 600;
  width: 80px;
  height: 30px;
  text-align: center;
`
const MintAmountInput = styled.input`
  font-size: 1.4rem;
  position: relative;
  text-align: center;
  display: block;
  width: 50px;
  border: none;
  top: -0.4rem;
  right: -1rem;
  background: transparent;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
    top: -0.3rem;
  }
`
const MintButton = styled.button`
  background: linear-gradient(to bottom, #00ff47 0%, #005f04 100%);
  width: 140px;
  height: 40px;
  margin: 8px;
  margin-top: 1rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 3px;

  @media screen and (max-width: 550px) {
    width: 120px;
    height: 30px;
    font-size: 1rem;
  }
`
const MintedInfo = styled.div`
  margin-top: 3rem;
  background-color: #2c2b2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #00ff47;
  width: 65%;
  height: 3rem;
  padding: 2rem 1rem;
  font-size: 1.3rem;

  @media screen and (max-width: 1300px) {
    font-size: 1.1rem;
    width: 80%;
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 820px) {
    width: 90%;
    font-size: 0.8rem;
  }
`

const MintingPage = () => {
  const [mintAmount, setmintAmount] = useState(1)

  const incrementMintHandler = () => {
    setmintAmount(mintAmount + 1)
  }

  const decrementMintHandler = () => {
    if (mintAmount > 1) {
      setmintAmount(mintAmount - 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmintAmount(Number(e.target.value))
  }

  return (
    <Container>
      <Helmet>
        <title>Minting-Red saint</title>
      </Helmet>
      <PageTitle>Catch the Ninja</PageTitle>
      <MintSection>
        <Image src="/images/card1.svg" alt="noimg" />
        <InfoSection>
          <Mint>Mint Price</Mint>
          <MintPrice>19 CRO</MintPrice>
          <MintAdjust>
            <PlusMinusBtn
              onClick={() => {
                decrementMintHandler()
              }}
            >
              <PlusMinusText>-</PlusMinusText>
            </PlusMinusBtn>
            <MintAmount>
              <MintAmountInput value={mintAmount} onChange={handleInputChange} />
            </MintAmount>
            <PlusMinusBtn
              onClick={() => {
                incrementMintHandler()
              }}
            >
              <PlusMinusText>+</PlusMinusText>
            </PlusMinusBtn>
          </MintAdjust>
          <MintButton>MINT</MintButton>
          <MintedInfo>
            <div>Minted: 0000</div>
            <div>/</div>
            <div>Total: 3578</div>
          </MintedInfo>
        </InfoSection>
      </MintSection>
    </Container>
  )
}

export default MintingPage
