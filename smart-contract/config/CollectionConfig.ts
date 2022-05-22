import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ClassyInMiami',
  tokenName: 'Classy in Miami',
  tokenSymbol: 'CLSM',
  hiddenMetadataUri: 'ipfs://QmUaGJYyE3gBPFteWTADK7rgpg1V2oh8SCiHP9gJRkdDKo/hidden.json',
  maxSupply: 250,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 5.0,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xb0c49Cb6e183B23Ac8A377D7febF71475a0117ff",
  marketplaceIdentifier: 'classy-in-miami',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
