import React, { useRef } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import styled from 'styled-components/macro'
import useWindowSize from '../../hooks/useWindowSize'

//End of AbsolutePlay

const Video = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const { width } = useWindowSize()
  const videoRef = useRef<any>()

  return (
    <VideoSection className="section-wrapper " width={width} style={{ marginTop: '-20px' }}>
      <RelativeSection width={width} className=" mx-auto z-50">
        <video src="video/videored.mp4" loop controls={false} ref={videoRef} />

        <AbsolutePlay width={width}>
          <button
            className="font-Raleway btn-play  text-primary text-sm  "
            onClick={() => {
              setPlayVideo(!playVideo)
              if (playVideo) {
                videoRef.current.pause()
              } else {
                videoRef.current.play()
              }
            }}
          >
            <div className="font-Raleway btn-content flexCenter font-extrabold leading-[30px] tracking-[1.05px] ">
              <span className="px-3 text-lg">{playVideo ? 'PAUSE' : 'PLAY'}</span>
            </div>
          </button>
        </AbsolutePlay>
      </RelativeSection>
    </VideoSection>
  )
}

export default Video

const VideoSection = styled.section<{ width?: Number }>`
  min-width: 320px;
`

const RelativeSection = styled.div<{ width: Number }>`
  position: relative;
  width: ${({ width: w }) => (w <= 500 ? '100%' : w <= 786 ? '80%' : '75%')};
  z-index: 50;
  video {
    width: 100%;
    height: auto;
  }
`
//end of RelativeSection

const AbsolutePlay = styled.div<{ width: Number }>`
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translate(-50%, -50%);

  .btn-play {
    background: white;
    border-radius: 15px;
    padding: ${({ width: w }) => (w <= 500 ? '2px 5px' : '2px 5px')};
  }

  .btn-content {
    font-family: Raleway;
    font-weight: 900;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.05px;
    color: #a80000;

    span {
      font-size: ${({ width: w }) => (w <= 500 ? '14px' : '18px')};
      line-height: 1.75rem;
      padding: ${({ width: w }) => (w <= 500 ? '2px 4px' : '4px 6px')};
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
`
