import React from 'react'
import './navBar.css'

const NavBar = ({ accounts, setAccounts }) => {
  async function connectAccount() {
    // console.log("window.ethereum", window.ethereum);
    if (!window.ethereum) {
      window.alert('Please install Metamask!')
      return
    }
    if (window.ethereum) {
      const _accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log('accounts', accounts, '=====');
      setAccounts(_accounts);
    }
  }
  return (
    <div className='nav-slot'>
      <div className='flex-space-between nav-bar-wrap'>
        <div className='flex-space-between nav-anchor-point'>
          <a href="#home" className='nav-a'>Home</a>
          <a href="#roadmap" className='nav-a'>Roadmap</a>
          <a href="#fqa" className='nav-a'>FQA</a>
        </div>
        <div className='flex-center nav-connect'>
          <div onClick={connectAccount} className={`${accounts[0] && 'nav-account'}`}>{ // 42
            accounts[0] ? `${accounts[0].substring(0, 4)}**${accounts[0].substring(38)}` : 'Connect'
          }</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
