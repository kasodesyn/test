import React from 'react'
import './navBar.css'

const SectionTitle = (props) => {
  if (!props.children) {
    return <div id={props.slot} />
  }
  return (
    <div className='flex-center section-title-wrap' id={props.slot}>
      <div className='section-title-content'>{props.children}</div>
    </div>
  )
}

export default SectionTitle
