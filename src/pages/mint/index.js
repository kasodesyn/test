import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SectionTitle from './components/SectionTitle'
import Image from './components/Image'
import { introduction } from './components/utils'
import Member from './components/Member'
import Question from './components/Question'
import './mint.css'
import action from './utils'

const Mint = () => {
  const [accounts, setAccounts] = useState([])
  
  let {
    isWhiteList, handlerDecrement, flag,
    handlerIncrement, value, handleMintWhiteList, handleMintGuest
  } = action({ accounts })

  const mintNft = () => {
    console.log("isIncludes",isWhiteList)
    if (isWhiteList) {
      handleMintWhiteList()
      return
    }
    handleMintGuest()
  }

  return (
    <div className='min-page'>
      <SectionTitle slot="home" />
      <NavBar accounts={accounts} setAccounts={setAccounts} />

      {/* mint */}
      <div className='mint-space-20' />
      <div className='mint-btn-wrap flex-center'>
        <div className='flex-center'>
          <Image type='window' width="100%" />
        </div>
        <div className='flex-center mint-btn-content'>
          <div onClick={handlerDecrement} className='btn mint-decrement'>-</div>
          <div value={value} className='btn flex-center mint-num'>{value}</div>
          <div onClick={handlerIncrement} className='btn mint-increment'>+</div>
          <div onClick={mintNft} className='btn mint-btn'>mint</div>
        </div>
      </div>
      {/* container */}
      <div>
        <SectionTitle>MEET THE WEIRDO GANG</SectionTitle>
        <div className='introduction-wrap'>{introduction}</div>
        <div className='flex-space-around section-image-sky'>
          <Image type="boy" />
          <Image type="girl" />
        </div>
      </div>

      {/* roadmap */}
      <div>
        <SectionTitle slot="roadmap">Roadmap</SectionTitle>
        <div className='flex-center'>
          <Image type='step' />
        </div>
      </div>

      {/* team */}
      <div className='member-wrap'>
        <SectionTitle slot="roadmap">WEIRDO GANG TEAM</SectionTitle>
        <Member type='nft_1' role="Founder" name="Block" />
        <Member type='nft_2' role="Head of Marking" name="Gabe Wang" />
        <Member type='nft_3' role="Artist" name="Allison" />
      </div>

      {/* FQA */}
      <div>
        <SectionTitle slot="fqa">FQA</SectionTitle>
        <Question
          question='What are the minting limitations?'
          answer="5 PER/WALLET"
        />
        <Question
          question='what is the cost?'
          answer="0.08ETH"
        />
        <Question
          question='what is the total supply?'
          answer="5,555"
        />
      </div>
      <div className='mint-space-30' />
      <div className='link-wrap flex-space-between'>
        <div className='link-section'>
          <div>Quick Link</div>
          <a href='#home'>Home</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#fqa">FQA</a>
        </div>
        <div className='link-section'>
          <div>Extra Link</div>
          <a>opensea</a>
          <a>Etherscan</a>

        </div>
        <div className='link-section'>
          <div>Follow Us</div>
          <a href='https://twitter.com/weirdogang_nft'>Twitter</a>
          <a href='https://discord.com/invite/mrVHUcB3Wr'>Discord</a>
        </div>
      </div>
      <div className='mint-space-30' />
    </div>
  )
}

export default Mint
