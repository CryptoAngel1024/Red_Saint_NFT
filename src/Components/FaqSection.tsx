import React from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'
import useWindowSize from '../hooks/useWindowSize'

const FaqSection = () => {
  const width = useWindowSize().width

  return (
    <div className=" section-wrapper mt-medium">
      <h1 className="text-center  secondary-heading mt-small " style={{ color: 'white' }}>
        Frequently Asked Question
      </h1>

      <GridFaqContainer className="mt-small" width={width}>
        <Toggle title="What is Red Saint NFT?">
          <div className="answer">
            <p className="text-semibold font-Poppins  ">
              Red Saint is an anime fanfiction based single character story. The NFT is made by artist Blood Saint from Asia. You can read the fanfiction on our
              website.
            </p>
          </div>
        </Toggle>

        <Toggle title="How many Red Saint NFTs are there?">
          <div className="answer text-semibold font-Poppins ">
            <p>There are a total of 3,578 scarf ninjas. But there is only one Red Saint Rank #1</p>
          </div>
        </Toggle>

        <Toggle title="Where will Red Saint NFTs be Minted?">
          <div className="answer text-semibold font-Poppins ">
            <p>They can be minted on redsaint.io</p>
          </div>
        </Toggle>

        <Toggle title="Which crypto wallet should I use?">
          <div className="answer text-semibold font-Poppins">
            <p>We support Metamask and Crypto.org DeFi Wallet. We prefer Metamask.</p>
          </div>
        </Toggle>

        <Toggle title="What is the cost of a  Red Saint NFT?">
          <div className="answer text-semibold font-Poppins ">
            <p>The price is capped at 19 CRO per saint. You can mint multiple saints in a single transaction.</p>
          </div>
        </Toggle>

        <Toggle title="Where can I view my Red Saint NFT after the purchase?">
          <div className="answer text-semibold font-Poppins">
            <p>There is an integrated NFT Viewer under the My Saints tab. Please keep in mind, the website doesn’t store your NFT.</p>
          </div>
        </Toggle>
      </GridFaqContainer>
    </div>
  )
}

const GridFaqContainer = styled.div<{ width: number }>`
  display: grid;
  grid-template-columns: ${({ width }) => (width <= 786 ? '1fr' : '1fr 1fr')};
  place-items: center top;
  grid-gap: 0.5rem;
  margin: 0 auto;
  min-height: 10vh;
  text-align: center;

  .answer {
    margin-top: 1rem;
    color: yellow;
    p {
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
    }
  }
`

export default FaqSection
