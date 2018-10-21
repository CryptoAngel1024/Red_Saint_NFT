import { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function SupplyLine(props) {
  const { TotalSupply, Minted, Remaining } = props
  return (
    <Fragment>
      <div className="line">
        <div className="text-center">
          <h1>{TotalSupply}</h1>
          <p>Total Supply</p>
        </div>
        <div className="text-center">
          <h1>{Minted}</h1>
          <p>Minted</p>
        </div>
        <div className="text-center">
          <h1>{Remaining}</h1>
          <p>Remaining</p>
        </div>
      </div>
      <div className="line-m py-3 text-center">
        <Row>
          <img className="img-fluid" src="/images/card1.svg" alt="Img" />
          <div className="bg-c text-center">
            <Row className="pb-4">
              <Col md={12}>
                <h1>{TotalSupply}</h1>
                <p>Total Supply</p>
              </Col>
              <hr style={{ color: '#fff', height: '2px' }} />
              <Col md={12}>
                <h1>{Minted}</h1>
                <p>Minted</p>
              </Col>
              <hr style={{ color: '#fff', height: '2px' }} />
              <Col md={12}>
                <h1>{Remaining}</h1>
                <p>Remaining</p>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </Fragment>
  )
}
