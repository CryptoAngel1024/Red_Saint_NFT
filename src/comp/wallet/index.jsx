import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { connector, MetaMaskconnector, walletconnect } from '../../web3Conf'
import { Fragment, useCallback, useEffect, useState } from 'react'
import MetaIcon from '../../img/meta-icon.svg'
import Crypto from '../../img/crypto-com.svg'
import WalletConnect from '../../img/walletconnect.svg'
import { Modal, Row, Col } from 'react-bootstrap'
import Web3 from 'web3'

export default function WalletButton() {
  const [modalShow, setModalShow] = useState(false)
  const [mywShow, setMyShow] = useState(false)
  const [balance, setBalance] = useState(0)
  const { active, activate, deactivate, account, error, library } = useWeb3React()

  const isUnsupportedChain = error instanceof UnsupportedChainIdError
  useEffect(() => {
    if (active) {
      localStorage.setItem('shouldEagerConnect', true)
    }
  }, [active])

  async function handleConnect() {
    await connector.activate()
    activate(connector)
    // connector.activate()
    // localStorage.setItem('shouldEagerConnect', true)
  }

  const handleConnectMetaMask = useCallback(() => {
    activate(MetaMaskconnector)
  }, [activate])

  const handleConnectWalletConnect = async () => {
    try {
      await activate(walletconnect)
    } catch (e) {
      console.log(e)
    }
  }

  const handleDisconnect = () => {
    deactivate()
    localStorage.removeItem('shouldEagerConnect')
    setMyShow(false)
    window.location.reload()
  }
  useEffect(() => {
    if (active) {
      setModalShow(false)
    }
  }, [])
  // Connection Modal
  function WalletConnector(props) {
    return (
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="text-center">
          <h1 className="connect-wallet-header mt-3">Connect Wallet</h1>

          <hr className="modal-hr" />
          <div className="mt-3 text-center">
            <Row>
              <Col className="mt-3" sm={12}>
                <div
                  className="select-wallet"
                  onClick={() => {
                    setModalShow(false)
                    handleConnectMetaMask()
                  }}
                >
                  <div className="d-flex align-items-center justify-content-start gap-3 my-3">
                    <img style={{ maxWidth: '20%' }} src={MetaIcon} alt="Metamask" />
                    <h3
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        color: '#a80000',
                      }}
                      className="mt-1"
                    >
                      MetaMask
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className="mt-3" sm={12}>
                <div
                  className="select-wallet"
                  onClick={() => {
                    setModalShow(false)
                    handleConnect()
                  }}
                >
                  <div className="d-flex align-items-center justify-content-start gap-3 my-3">
                    <img style={{ maxWidth: '20%' }} src={Crypto} alt="DeFi Wallet" />
                    <h3
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        color: '#a80000',
                      }}
                      className="mt-1"
                    >
                      Crypto.com DeFi Wallet
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className="mt-3" sm={12}>
                <div
                  className="select-wallet"
                  onClick={() => {
                    setModalShow(false)
                    handleConnectWalletConnect()
                  }}
                >
                  <div className="d-flex align-items-center justify-content-start gap-3 my-3">
                    <img style={{ maxWidth: '20%' }} src={WalletConnect} alt="DeFi Wallet" />
                    <h3
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        color: '#a80000',
                      }}
                      className="mt-1"
                    >
                      WalletConnect
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter text-center">Wallet Address</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p style={{ wordBreak: 'break-all' }} className="m-3">
            {account}
          </p>
          <button type="button" className="mint-btn-n bg-main p-2 rounded" style={{ color: 'white' }} onClick={handleDisconnect}>
            Disconnect Wallet
          </button>
        </Modal.Body>
      </Modal>
    )
  }
  return (
    <Fragment>
      {!active ? (
        <button onClick={() => setModalShow(true)} type="button" className="connect-wallet">
          {isUnsupportedChain ? 'Switch to Cronos Chain' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="container">
          <button type="button" onClick={() => setMyShow(true)} className="connect-wallet">
            Connected
          </button>
        </div>
      )}
      <WalletConnector show={modalShow} onHide={() => setModalShow(false)} />
      <MyVerticallyCenteredModal show={mywShow} onHide={() => setMyShow(false)} />
    </Fragment>
  )
}
