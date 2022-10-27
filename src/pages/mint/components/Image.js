import React from 'react'
import girl from '../../../assets/mint/sky_girl.jpg'
import boy from '../../../assets/mint/sky_boy.jpg'
import window from '../../../assets/mint/window.jpg'
import step from '../../../assets/mint/step.jpg'
import mint from '../../../assets/mint/mint.jpg'
import nft_1 from '../../../assets/mint/nft_1.jpg'
import nft_2 from '../../../assets/mint/nft_2.jpg'
import nft_3 from '../../../assets/mint/nft_3.jpg'
import './image.css'

const Image = (props) => {
  switch (props.type) {
    case 'girl':
      return (
        <img className='image-girl' src={girl} alt='' />
      )
    case 'boy':
      return (
        <img className='image-boy' src={boy} alt='' />
      )
    case 'nft_1':
      return (
        <img className='image-nft_1' src={nft_1} alt='' />
      )
    case 'nft_2':
      return (
        <img className='image-nft_1' src={nft_2} alt='' />
      )
    case 'nft_3':
      return (
        <img className='image-nft_1' src={nft_3} alt='' />
      )
    case 'window':
      return (
        <img className='image-window' src={window} alt='' />
      )
    case 'step':
      return (
        <img className='image-step' src={step} alt='' />
      )
    case 'mint':
      return (
        <img className='image-mint' src={mint} alt='' />
      )
    // case 'girl':
    //   return (
    //     <img className='image-girl' src={girl} alt='' />
    //   )

    default:
      return (
        <img className='image-girl' src={girl} alt='' />
      );
  }
}

export default Image
