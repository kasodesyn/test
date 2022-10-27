const { ethers } = require("ethers");
const dotenv = require("dotenv");
dotenv.config();

const Token = require("../src/contracts/Token.json");
const contractAddress = require("../src/contracts/contract-address.json");

const rpc = process.env.REACT_APP_PINKEBY_RPC_URL;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(rpc);
// 通过私钥连接钱包
const wallet = new ethers.Wallet(privateKey);
// 获取钱包账户对应的地址
const signer = wallet.connect(provider);

const contract = new ethers.Contract(
  contractAddress.Token, // 合约地址
  Token.abi, // abi
  signer
);
// 开启mint
const publish = async (value = true) => {
  // 使用签名器创建一个新的合约实例，它允许使用可更新状态的方法
  const tx = await contract.setIsPublicMintEnabled(value);
  console.log(tx.hash);
  const r = await tx.wait();
  console.log(r, 'r');
};

const main = async () => {
  await publish(false);
};

main();
