import React, { Fragment, useEffect, useState } from 'react'

import styled from 'styled-components'

import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Col, Container, Row } from 'react-bootstrap'
import Img from '../../img/mint/mint.png'
import SmartContractConfig from '../../config/SmartContract'
import ConnectWallet from '../../comp/wallet'
import { Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

export const ContainerStyled = styled.div`
  /* background: rgb(193, 0, 0); */
  /* background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%); */
  min-height: 90vh;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 0.5rem 0;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const CardContainer = styled.div`
  margin: 0 auto;
  background-color: #930058;
  color: #fff;
`
const Image = styled.img``

const NFTTtitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

const MySaints = () => {
  const { account, deactivate, active } = useWeb3React()
  const [allnfts, setAllNFT] = useState(null)
  const [isLoading, setIsLoad] = useState(true)
  const [isempty, setIsempty] = useState(false)
  const [nftid, setNftId] = useState([])
  let nfts = []
  let ids = []

  const fetchData = async () => {
    let cro = `${process.env.REACT_APP_RPC_URL_1}`
    var web3 = new Web3(new Web3.providers.HttpProvider(cro))
    let contract = new web3.eth.Contract(SmartContractConfig.abi, SmartContractConfig.address)
    if (active) {
      const nftOwned = await contract.methods.balanceOf(account).call()

      for (let index = 0; index < nftOwned; index++) {
        let nftIndex = await contract.methods.tokenOfOwnerByIndex(account, index).call()
        let uri = await contract.methods.tokenURI(nftIndex).call()
        let response = await fetch(uri)
        //if someone tries to cheat using baseuri there's an easter egg for them
        // let baseURI = await contract.methods.baseURI().call()
        // let response = await fetch(baseURI)
        let nftData = await response.json()
        nfts.push(nftData)
        ids.push(nftIndex)
      }
      setAllNFT(nfts)
      setNftId(ids)
      if (nfts.length === 0) {
        setIsempty(true)
        return
      }
      setIsLoad(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [active])

  return (
    <ContainerStyled>
      <Helmet>
        <title>My Saints-Red Saint</title>
        <meta name="description" content="My Saints " />
      </Helmet>
      <div className="section-wrapper" style={{ paddingTop: '10vh' }}>
        <div className="mt-3 pb-3">
          {active ? (
            <>
              {isempty ? (
                <>
                  <Container className="text-center">
                    <h2 className="secondary-heading" style={{ color: 'white' }}>
                      Please mint NFT before viewing..
                    </h2>
                  </Container>
                </>
              ) : (
                ''
              )}

              {allnfts === null ? (
                <>
                  <Container className="text-center">
                    {isLoading ? (
                      <div className="inline-fl pl-con color-orange pt-5 pb-5">
                        <h1>
                          Loading... <Spinner animation="grow" variant="light" />
                        </h1>
                      </div>
                    ) : (
                      ''
                    )}
                  </Container>
                </>
              ) : (
                <Container className="text-center">
                  <GridContainer>
                    {allnfts.map((item, index) => (
                      <Fragment key={index}>
                        <CardContainer className="mb-2">
                          <Image src={item.image} alt="noimg" />
                          <NFTTtitle>{item.name}</NFTTtitle>
                          <>{item.description}</>
                        </CardContainer>
                      </Fragment>
                    ))}
                  </GridContainer>
                </Container>
              )}
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center pt-5 pb-5">
              <div>
                <p className="paragraph" style={{ color: 'white' }}>
                  Connect the wallet that you minted with to view your NFT.
                </p>
                <div className="mt-small-pixel" style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
                  <ConnectWallet />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ContainerStyled>
  )
}

export default MySaints
