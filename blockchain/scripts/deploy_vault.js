const hardhat = require("hardhat");
const { nftAddress } = require("./constructor.json");

async function main() {
  const Vault = await hardhat.ethers.getContractFactory("Vault");
  const vaultContract = await Vault.deploy(nftAddress);

  console.log("Vault deployed at:", vaultContract.address);

  await vaultContract.deployTransaction.wait([(confirms = 6)]);

  await hardhat.run("verify:verify", {
    address: vaultContract.address,
    constructorArguments: [nftAddress],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
