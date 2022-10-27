import { useState } from 'react';
import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"

import { whiteList } from "./data.js";
import { useEffect } from 'react';

const useMintWhiteList = (account) => {
  const [proof, setProof] = useState()
  const [isWhiteList, setIsWhiteList] = useState()

  useEffect(() => {
    console.log("1111")
    const [address] = account
    const leaves = whiteList.map(x => keccak256(x));
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const proof_ = tree.getProof(keccak256(address))
    const isWhiteList_ = whiteList.includes(address)
    console.log(isWhiteList,"0xf8D9d01c90B84dc99064968ED77b829Ab0A593f7")
    setIsWhiteList(isWhiteList_)
    setProof(proof_)
  }, [account])

  return {
    proof,
    isWhiteList
  }
}

export default useMintWhiteList
