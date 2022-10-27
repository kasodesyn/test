import React from 'react'

import '../mint.css'

const Question = (props) => {
  const { question, answer } = props
  return (
    <div className='question-wrap'>
      <div className='question-icon-wrap flex-center'>
        <div className='question-icon-circle'></div>
      </div>
      <div className='question-info-wrap'>
        <div className='question-info-fqa'>{question}</div>
        <div className='question-info-answer'>{answer}</div>
      </div>
    </div>
  )
}

export default Question
