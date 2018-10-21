import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './web3Conf'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import ConnectWallet from './comp/wallet'
import MetamaskProvider from './hooks/useEagerConnect'

import useWindowSize from './hooks/useWindowSize'
import GlobalStyle from './global.css'
import Navbar from './Components/Navbar/Navbar.js'
import Home from './pages/Home'
import NftViwer from './pages/NftViwer'
import Footer from './Components/Footer'
import MintingPage from './Components/Mint/MintingPage.jsx'
import MySaints from './Components/MySaints/MySaints.jsx'
import MarketPlace from './Components/MarketPlace/MarketPlace.jsx'
import Placeholder from './Components/Placeholder'
import FanFiction from './Components/FanFiction/FanFiction'

function App() {
  const { width } = useWindowSize()
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <BrowserRouter>
          <GlobalStyle width={width} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mint" element={<MintingPage />} />
            <Route path="/mysaints" element={<MySaints />} />
            <Route path="/rarities" element={<Placeholder title="Rarities coming after mint reveal!!" pageTitle="Rarities" />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/fanfiction" element={<FanFiction />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MetamaskProvider>
    </Web3ReactProvider>
  )
}

export default App
