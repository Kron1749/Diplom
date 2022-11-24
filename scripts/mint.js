const { ethers} = require("hardhat")

async function mint() {
  const randomPic = "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json"
  accounts = await ethers.getSigners()
  const deployer = accounts[0]
  console.log(deployer.address)
  await deployments.fixture(["all"])
  const nft = await ethers.getContract("NFT")
  console.log("Minting NFT...")
  const mintTx = await nft.mintToken(deployer.address,2,randomPic)
  const mintTxReceipt = await mintTx.wait(1)
  const tokenId = mintTxReceipt.events[0].args.tokenId
  console.log(`TokenId: ${tokenId}`)
  console.log(`NFT Address: ${nft.address}`)

}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })