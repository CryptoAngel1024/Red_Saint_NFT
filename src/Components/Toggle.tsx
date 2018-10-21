// import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useOutsideClick } from '@chakra-ui/react'

const Toggle: React.FC<{ title: string }> = ({ children, title }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const ref = React.useRef<HTMLInputElement | null>(null)

  useOutsideClick({ ref: ref, handler: () => setToggle(false) })

  return (
    <div ref={ref} style={{ marginTop: '1rem', cursor: 'pointer' }} onClick={() => setToggle(!toggle)}>
      <h4 className="white" style={{ cursor: 'pointer', fontWeight: 'semibold', fontFamily: 'Poppins', fontSize: '1.5rem' }}>
        {title}
      </h4>
      {toggle ? children : ''}
    </div>
  )
}
export default Toggle
