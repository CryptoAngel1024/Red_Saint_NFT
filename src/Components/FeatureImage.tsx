import React from 'react'
import Tilt from 'react-parallax-tilt'
import useWindowSize from '../hooks/useWindowSize'

type ImageProps = {
  src: string
  alt?: string
}

const FeatureImage: React.FC<ImageProps> = ({ src }) => {
  const { width } = useWindowSize()
  return (
    <div className="featureCard font-Raleway">
      <Tilt scale={width < 500 ? 1.05 : 1.1}>
        <img src={src} alt="Card Items 1" style={{ width: '100%', height: '100%' }} />
      </Tilt>
    </div>
  )
}

export default FeatureImage
