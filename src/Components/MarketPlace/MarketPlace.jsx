import React, { Fragment, useEffect, useState } from 'react'

import styled from 'styled-components'

import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import { Col, Container, Row } from 'react-bootstrap'
import Img from '../../img/mint/mint.png'
import SmartContractConfig from '../../config/SmartContract'
import ConnectWallet from '../../comp/wallet'
import { Spinner, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Select, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
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
  border-radius: 10px;
  border: 1px solid gray;
`
const Image = styled.img``

const NFTTtitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

const CardBody = styled.div`
  margin: 0 auto;
  padding: 10px;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #930058;
  color: #fff;
`
const CardFooter = styled.div`
  margin: 0 auto;
  background-color: #930058;
  color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const MarketItems = styled.div`
  display: flex;
  margin: 0 30px;
  justify-content: space-around;
  padding: 10px 0;
`
const MarketItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  color: black;
`
const MarketPlaceTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`
const SearchPanel = styled.div`
  display: flex;
  position: relative;
  padding: 20px 0;
  justify-content: space-between;
`
const FilterPanel = styled.div`
  display: flex;
  position: relative;
  padding: 20px 0;
  justify-content: space-between;
`
const SortBtn = styled.div`
  border: 1px solid gray;
  display: flex;
  width: 181px;
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`
const SortModal = styled.div`
    position: absolute;
    background-color: white;
    color: black;
    top: 58px;
    right: 10px;
    width: 181px;
    z-index: 1;
`
const SortItem = styled.div`
  font-size: 15px;
  &:hover {
    background: #8c163c;
  }
`
const SearchBox = styled.div`
  display: flex;
  width: 150px;
  background-color: green;
  color: block;
  border-radius: 3px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`
const FilterBtn = styled.div`
  border: 1px solid gray;
  display: flex;
  width: 181px;
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`
const FilterModal = styled.div`
  background-color: white;
  width: 200px;
  position: absolute;
  top: 50px;
  padding: 10px;
`
const PriceModal = styled.div`
  background-color: white;
  width: 180px;
  position: absolute;
  top: 40px;
  left: 11px;
  z-index: 1;
`
const TrianglePart = styled.div`
  position: absolute;
  top: -15px;
  width: 0;
  left: 20px;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #FFF;
`
const ControlPanel = styled.div`
  position: relative;
`
const FilterComponents = styled.div`
  display: flex;
`
const FilterValues = styled.div`
 color: black;
 padding: '10px 20px';
`
const FilterValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MarketPlace = () => {
  const { account, deactivate, active } = useWeb3React()
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [allnfts, setAllNFT] = useState(null)
  const [isLoading, setIsLoad] = useState(true)
  const [isempty, setIsempty] = useState(false)
  const [nftid, setNftId] = useState([])
  const [isSort, setSort] = useState(false)
  const showPanel = () => {
    setSort(!isSort)
  }
  const [isBack, setBack] = useState(false)
  const showBack = () => {
    setBack(!isBack)
  }
  const [isEyes, setEyes] = useState(false)
  const showEyes = () => {
    setEyes(!isEyes)
  }
  const [isHead, setHead] = useState(false)
  const showHead = () => {
    setHead(!isHead)
  }
  const [isJacket, setJacket] = useState(false)
  const showJacket = () => {
    setJacket(!isJacket)
  }
  const [isMouth, setMouth] = useState(false)
  const showMouth = () => {
    setMouth(!isMouth)
  }
  const [isScarf, setScarf] = useState(false)
  const showScarf = () => {
    setScarf(!isScarf)
  }
  const [isWeapon, setWeapon] = useState(false)
  const showWeapon = () => {
    setWeapon(!isWeapon)
  }
  const [isPrice, setPrice] = useState(false)
  const showPrice = () => {
    setPrice(!isPrice)
  }
  const [value, setValue] = useState('Chimp Id: high to low')
  const onChange = (newData)=> {
    setValue(newData)
    setSort(false)
  }
  const [filterBack, setFilterBack] = useState(false)
  const selectedBack = (value) => {
    console.log("e", value.e.target.checked, value.index)
    setFilterBack(value.e.target.checked)
  }
  let nfts = []
  let ids = []
  let sortData=['Chimp Id: high to low', 'Price: low to high', 'Price: high to low']
  let background = ['Brown', 'Crimson', 'Grey', 'Orange', 'Rose', 'Turquoise']
  let eyes = ['Blue Eyes', 'Evil Eyes', 'Green Scar Eyes', 'Mixed Color Eyes', 'Mysterious Eyes', 'Ninja Eyes', 'Red Scar Eyes', 'Samurai Eyes']
  let head = ['Black', 'Brown', 'Grey', 'Purple', 'Red', 'White']
  let jacket = ['Black with Red Accent', 'Grey with Lime Accent', 'Grey with Red Accent', 'Grey with White Accent', 'Red with Grey Accent', 'White with Black Accent', 'White with Red Accent']
  let mouth = ['Angry', 'Frown', 'Mad', 'Smile with Teeths', 'Wide Smile']
  let scarf = ['Black', 'Brown', 'Orange', 'Purple', 'Red', 'White']
  let weapon = ['Axe', 'Broadsword', 'Claymore', 'Dagger', 'Flanged Mace', 'Halberd', 'Katana']

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
      <div className="section-wrapper">
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
                <>
                  <Container className="text-center text-white">
                    <MarketPlaceTitle> Marketplace </MarketPlaceTitle>
                    <div>A place to view all Cronos Red Saints, listed or otherwise</div>
                    <MarketItems>
                      <MarketItem>
                        <div>Floor Price</div>
                        <div className="text-bold">- CRO</div> 
                      </MarketItem>
                      <MarketItem>
                        <div>Currently Listed</div>
                        <div className="text-bold">- Red Saints</div> 
                      </MarketItem>
                      <MarketItem>
                        <div>Volume</div>
                        <div className="text-bold">14,624,680 CRO</div> 
                      </MarketItem>
                    </MarketItems>
                    <SearchPanel>
                      <div style={{display:'flex'}}>
                        <InputGroup style={{ width: '200px'}}>
                          <Input placeholder='Enter amount' style={{backgroundColor:'white'}} />
                          <InputRightElement children={<Search2Icon color='gray'/>} />
                        </InputGroup>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center'}}>
                          <FilterBtn onClick={showPrice}>Price Range
                            {isPrice?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isPrice && <PriceFilter/> }
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        SortBy
                        <SortBtn onClick={showPanel} style={{ marginLeft: '10px' }}>{value} {isSort?<BiChevronDown/>:<BiChevronUp/>}</SortBtn>
                        {isSort && <SortDropDown sortData={sortData} onData={onChange}/> }
                      </div>
                    </SearchPanel>
                    <hr/>
                    <FilterPanel  style={{ alignItems: 'center' }}>
                      <div>Filters</div>
                      <FilterComponents>
                        <ControlPanel>
                          <FilterBtn onClick={showBack}>
                            Background
                            {isBack?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          <div>{filterBack}</div>
                          {isBack && <Backgound background={background} onData={selectedBack}/>}
                        </ControlPanel>
                        <ControlPanel>
                          <FilterBtn onClick={showEyes}>
                            Eyes
                            {isEyes?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isEyes && <Eyes eyes={eyes}/>}
                        </ControlPanel>
     
                        <ControlPanel>
                          <FilterBtn onClick={showHead}>
                            Head
                            {isHead?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isHead && <Head head={head}/>}
                        </ControlPanel>
                        <ControlPanel>
                          <FilterBtn onClick={showJacket}>
                            Jacket
                            {isJacket?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isJacket && <Jacket jacket={jacket}/>}
                        </ControlPanel>
                        <ControlPanel>
                          <FilterBtn onClick={showMouth}>
                            Mouth
                            {isMouth?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isMouth && <Mouth mouth={mouth}/>}
                        </ControlPanel>
                        <ControlPanel>
                          <FilterBtn onClick={showScarf}>
                            Scarf
                            {isScarf?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isScarf && <Scarf scarf={scarf}/>}
                        </ControlPanel>
                        <ControlPanel>
                          <FilterBtn onClick={showWeapon}>
                            Weapon
                            {isWeapon?<BiChevronDown/>:<BiChevronUp/>}
                          </FilterBtn>
                          {isWeapon && <Weapon weapon={weapon}/>}
                        </ControlPanel>
                      </FilterComponents>
                    </FilterPanel>
                  </Container>
                </>
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
                          <CardBody>
                            <Image src={item.image} alt="noimg" />
                            <NFTTtitle>{item.name}</NFTTtitle>
                            <div>Traits: { item.attributes.length }</div>
                          </CardBody>
                          <CardFooter>
                            <div>Price</div>
                            <div className='text-bold'>900 Cro</div>
                          </CardFooter>
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

export default MarketPlace


const SortDropDown = (props)=>{
  return (
    <>
      <SortModal>
        {props.sortData.map((item, index) => (
            <SortItem key={index} onClick={()=>props.onData(item)}>{item}</SortItem>
        ))}
      </SortModal>
    </>
  );
};

const PriceFilter = ()=>{
  return (
    <>
      <PriceModal style={{color: 'black', backgroundColor: 'white'}}>
        <div style={{display:'flex', padding:'10px 5px'}}>
          <Input placeholder='Min' size='xs' style={{marginRight:'5px'}}/>
          -
          <Input placeholder='Max' size='xs' style={{marginLeft:'5px'}} />
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <Button colorScheme='teal' size='xs'>
            Clear
          </Button>
          <Button colorScheme='teal' size='xs'>
            Apply
          </Button>
        </div>
      </PriceModal>
    </>
  );
};
const Backgound = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.background.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};

const Eyes = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.eyes.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};
const Head = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.head.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};
const Jacket = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.jacket.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};
const Mouth = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.mouth.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};

const Scarf = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.scarf.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};

const Weapon = (props)=>{
  return (
    <>
      <FilterModal>
        <TrianglePart/>
          <FilterValues>
            {props.weapon.map((backround, index)=>
              <FilterValue key={index}>
                <div>{backround}</div>
                <input type="checkbox" id="scales" name="scales"/>
              </FilterValue>
            )}
          </FilterValues>
      </FilterModal>
    </>
  );
};

