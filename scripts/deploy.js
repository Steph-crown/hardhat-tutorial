async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  console.log("Token address:", token.address);

  const address1 = "0xFe9b9FC65cC0870410e17Fd624134816D8d8fE43";
  const transferToken = await token.transfer(address1, 50);
  console.log("transferToken:", transferToken);
  console.log(
    "deployer balance balance",
    (await token.balanceOf(deployer.address)).toString()
  );
  console.log("address1 balance", (await token.balanceOf(address1)).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
