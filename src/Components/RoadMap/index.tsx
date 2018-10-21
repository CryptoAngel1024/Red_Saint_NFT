import { Fragment } from 'react'
import { Container } from './RoadMapStyled'
// import HomeUrl from '/images/star.svg'

export default function RoadMap() {
  return (
    <Fragment>
      <div style={{ paddingBottom: '2rem' }}>
        <section className="section-wrapper mt-large relative  " style={{ color: 'white' }} id="info">
          <h2 className="primary-heading" style={{ paddingTop: '3rem', color: 'white' }}>
            Road Map
          </h2>
          <div className="row mt-5 pt-4">
            <Container>
              <div className="main-timeline">
                <div className="timeline">
                  <p className="timeline-content">
                    {/* <div className="timeline-year">2021</div> */}
                    <h3 className="title">GOAL 1</h3>
                    <p className="description">
                      <p>Social Media Outreach </p>
                      <p>Full Mint / Rarity Reveal</p>
                    </p>
                  </p>
                </div>

                <div className="timeline">
                  <p className="timeline-content">
                    {/* <div className="timeline-year">2021</div> */}
                    <h3 className="title">GOAL 2</h3>
                    <p className="description">
                      <p>NFT Viewer</p>
                      <p>Integrated Marketplace</p>
                    </p>
                  </p>
                </div>

                <div className="timeline">
                  <div className="timeline-content">
                    {/* <div className="timeline-year">2021</div> */}
                    <h3 className="title">GOAL 3</h3>
                    <p className="description">
                      <p>$RED Token</p>
                      <p>NFT Staking</p>
                    </p>
                  </div>
                </div>

                <div className="timeline">
                  <div className="timeline-content">
                    {/* <div className="timeline-year">2022</div> */}
                    <h3 className="title">GOAL 4</h3>
                    <p className="description">
                      <p>Into the Metaverse</p>
                      <p>New Roadmap with community input</p>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </Fragment>
  )
}
