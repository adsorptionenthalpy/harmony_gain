require ("@nomiclabs/hardhat-waffle");
require('dotenv').config()

async function main() {
    const gain = await hre.ethers.getContractFactory("GainProtocol");
    const gaincontract = await gain.deploy(process.env.ROUTER_ADDRESS, process.env.SWEEPSTAKE_ADDRESS);
    console.log("GainProtocol deployed to:", gaincontract.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});