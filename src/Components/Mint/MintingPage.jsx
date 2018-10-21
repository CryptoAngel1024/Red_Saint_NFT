import { useState, useEffect, Fragment } from 'react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import useMarketPlaceContract from '../../config/Contract'
import SmartContractConfig from '../../config/SmartContract'
import { useGas as Gas } from '../../config/useGas'
import { Spinner, useToast } from '@chakra-ui/react'
import WalletButton from '../../comp/wallet'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { Box } from '@chakra-ui/react'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem 3rem 5rem;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%);
  @media screen and (max-width: 768px) {
    padding: 0 2.5rem 1rem 2.5rem;
  }
`

const PageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  margin: 0.4rem 0;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 820px) {
    font-size: 1.8rem;
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
  padding: 2rem 3rem;
  width: 65%;
  max-height: 550px;
  object-fit: contain;

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
  width: 35%;
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
  font-family: 'Encode Sans Expanded', sans-serif;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`
const MintPrice = styled.h2`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  place-items: center;
  color: #00e738;
  padding: 0;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`
const MintAdjust = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  @media screen and (max-width: 1000px) {
    margin-top: 3.8rem;
  }
  @media screen and (max-width: 820px) {
    margin-top: 2.8rem;
  }
  @media screen and (max-width: 550px) {
    margin-top: 1.3rem;
  }
`

const PlusMinusBtn = styled.button`
  color: #00f543;
  font-size: 2rem;
  font-weight: 800;

  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`

const MintAmount = styled.div`
  border-bottom: 3px solid #00f543;
  color: #fff;
  font-weight: 600;
  width: 80px;
  height: 30px;
  text-align: center;
  /* 
  @media screen and (max-width: 550px) {
    width: 60px;
  } */
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
    top: -0.1rem;
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
  font-size: 1.4rem;
  border-radius: 3px;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 1000px) {
    width: 130px;
    height: 40px;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
    width: 90px;
    height: 32px;
    border-radius: 2px;
  }
`
const MintedInfo = styled.div`
  margin-top: 3rem;
  background-color: #2c2b2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #00ff47;
  width: 85%;
  height: 3rem;
  padding: 2rem 1rem;
  font-size: 1.13rem;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 1300px) {
    font-size: 1.1rem;
    width: 80%;
    padding: 1rem 0.5rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 970px) {
    width: 100%;
  }

  @media screen and (max-width: 820px) {
    width: 90%;
    font-size: 1rem;
    margin-top: 1rem;
  }
`

const MintingPage = () => {
  const contractMint = useMarketPlaceContract()
  const { active, account } = useWeb3React()
  const [amount, setAmount] = useState(1)
  const [loading, setLoading] = useState(true)
  const shareUrl = 'https://www.redsaint.io/mint'

  let RPC = `${process.env.REACT_APP_RPC_URL_1}`
  var web3 = new Web3(new Web3.providers.HttpProvider(RPC))
  const contract_address = SmartContractConfig.address
  const [TotalSupply, setTotalSupply] = useState(0)
  const [Minted, setMinted] = useState(0)
  const [isminting, setIsMinting] = useState(false)
  const [Remaining, setRemaining] = useState(0)
  const [currentPrice, setCurrentPrice] = useState('0')
  const toast = useToast()
  let contract = new web3.eth.Contract(SmartContractConfig.abi, contract_address)

  const handleInputChange = e => {
    if (Number(e.target.value) <= 10) {
      setAmount(Number(e.target.value))
    } else {
      toast({
        title: 'Error',
        description: 'Max Mint Amount is 10',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  const handlesell = async () => {
    try {
      let cost = await contractMint.methods.getMintPrice(1).call()
      let totalCostWei = String(cost * amount)
      let encodeBody = await contractMint.methods.mintSaint(String(amount)).encodeABI()
      let gasFee = await Gas(account, encodeBody, totalCostWei, SmartContractConfig.address)

      if (active) {
        await contractMint.methods
          .mintSaint(String(amount))
          .send({
            gasLimit: String(gasFee),
            from: account,
            value: totalCostWei,
          })
          .on('transactionHash', txHash => {
            toast({ description: 'Please wait....' })
          })
          .on('receipt', () => {
            setIsMinting(false)
            toast({ description: 'Saint minted! View in My Saints' })

            toast({
              isClosable: true,
              duration: 15000,
              render: () => (
                <Box
                  color="white"
                  p={3}
                  bg="green.500"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <h2>Share Your Happiness Of Minting {amount} Red Saint By Clicking Twitter Icon </h2>

                  <TwitterShareButton
                    url={shareUrl}
                    title="So Rare. Just minted RedSaint NFT on #Cro @RedSaintNFT 🥳🎉
                🎨 Mint your own Original Anime NFT at https://www.redsaint.io/mint Only 19 Cro $RED"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </Box>
              ),
            })
          })
          .on('error', error => {
            setIsMinting(false)
            toast({ description: `Uh oh! Please contact us! ${error.message}` })
          })
      }
    } catch (error) {
      toast({
        title: 'Error.',
        description: `${error.message.match('insufficient balance for transfer') ? 'Not enough balance' : 'Uh oh! Something went wrong. Please contact us!'} ${
          error.message
        }`,
        status: 'error',
        duration: 10000,
        isClosable: true,
        position: 'top',
      })

      // toast({
      //   isClosable: true,
      //   duration: 15000,
      //   render: () => (
      //     <Box
      //       color="white"
      //       p={3}
      //       bg="green.500"
      //       style={{
      //         display: 'flex',
      //         flexDirection: 'column',
      //         alignItems: 'center',
      //         gap: '10px',
      //       }}
      //     >
      //       <h2>Share Your Happiness Of Minting {amount} Red Saint By Clicking Twitter Icon </h2>

      //       <TwitterShareButton
      //         url={shareUrl}
      //         title="So Rare. Just minted RedSaint NFT on #Cro @RedSaintNFT 🥳🎉
      //           🎨 Mint your own Original Anime NFT at https://www.redsaint.io/mint Only 19 Cro $RED"
      //       >
      //         <TwitterIcon size={32} round />
      //       </TwitterShareButton>
      //     </Box>
      //   ),
      // })

      // toast({
      //   isClosable: true,
      //   render: () => (
      //     <Box color="white" p={3} bg="green.500" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      //       <h2>Share your Happiness in twitter </h2>
      //       <TwitterShareButton url={shareUrl} title={`I have minted  ${amount} Ninja from`} hashtags={['redSaint', 'cornos']}>
      //         <TwitterIcon size={32} round />
      //       </TwitterShareButton>
      //     </Box>
      //   ),
      // })

      setIsMinting(false)
    }
  }

  const Data = async () => {
    try {
      let ts = await contract.methods.maxSupply().call()
      let tminted = await contract.methods.totalSupply().call()
      let remain = await contract.methods.saintsRemainingToAssign().call()
      let price = await contract.methods.getMintPrice(1).call()
      setCurrentPrice(web3.utils.fromWei(price, 'ether'))
      setTotalSupply(ts)
      setMinted(tminted)
      setRemaining(remain)
      setLoading(false)
    } catch (error) {
      toast({
        title: 'Error.',
        description: `Uh oh! Something went wrong. Please contact us! ${error.message}`,
        status: 'error',
        duration: 10000,
        isClosable: true,
        position: 'top',
      })
    }
  }
  useEffect(() => {
    Data()
  }, [])

  const incrementMintHandler = () => {
    if (amount < 10) {
      setAmount(amount + 1)
    } else {
      toast({
        title: 'Error',
        description: 'Max Mint Amount is 10',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  const decrementMintHandler = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <ContainerStyled>
      <Helmet>
        <title>Mint - Red Saint</title>
        <meta name="description" content="Minting page of Red Saint " />
      </Helmet>

      <PageTitle className="text-center">Catch the Red Ninja</PageTitle>
      <MintSection>
        <Image src="/images/purpleninja.gif" alt="Purple Ninja GIF" />
        <InfoSection>
          <Mint>Mint Price</Mint>
          <MintPrice>
            {loading ? <Spinner /> : currentPrice * amount} CRO
            <img src="/images/cornoslogo.png" alt="Cronos logo" style={{ width: '35px', height: '35px', marginTop: '4px' }} />
          </MintPrice>
          {/* {toast({
            isClosable: true,
            render: () => (
              <Box color="white" p={2} rounded="md" bg="green.500" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <h2>Share your Happiness on twitter</h2>
                <TwitterShareButton url={shareUrl} title={`I have minted  ${amount} Ninja from`} hashtags={['redSaint', 'cornos']}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Box>
            ),
          })} */}

          {active ? (
            <>
              <MintAdjust>
                <PlusMinusBtn
                  onClick={() => {
                    decrementMintHandler()
                  }}
                >
                  <AiOutlineMinusCircle />
                </PlusMinusBtn>
                <MintAmount>
                  <MintAmountInput value={amount} onChange={handleInputChange} />
                </MintAmount>
                <PlusMinusBtn
                  onClick={() => {
                    incrementMintHandler()
                  }}
                >
                  <AiOutlinePlusCircle />
                </PlusMinusBtn>
              </MintAdjust>
              <MintButton onClick={handlesell}>MINT</MintButton>
            </>
          ) : (
            <div style={{ marginTop: '20px', maxWidth: '200px' }}>
              <WalletButton />
            </div>
          )}

          <MintedInfo>
            {/* {console.log(currentPrice * amount)} */}
            <div>Minted: {loading ? <Spinner size="sm" /> : <span style={{ fontWeight: 'bold' }}>{Minted}</span>}</div>
            <div>/</div>
            <div>Remaining: {loading ? <Spinner size="sm" /> : <span style={{ fontWeight: 'bold' }}>{Remaining}</span>}</div>
          </MintedInfo>
        </InfoSection>
      </MintSection>
    </ContainerStyled>
  )
}

export default MintingPage
