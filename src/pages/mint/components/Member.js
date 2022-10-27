import React from 'react'
import Image from './Image'

import '../mint.css'

const Member = ({ type, role, name }) => {
  return (
    <div className='flex-center-column member-content'>
      <Image type={type} />
      <div className='member-role'>{role}</div>
      <div className='member-name'>{name}</div>
    </div>
  )
}

export default Member
