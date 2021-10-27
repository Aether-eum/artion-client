import { ChainId } from 'hadeswap-beta-sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Olympus',
  [ChainId.BSC]: 'BSC',
  [ChainId.SPARTA]: 'Sparta',
  [ChainId.MUMBAI]: 'MATIC Testnet',
};

export const Contracts = {
  // [ChainId.MAINNET]: {
  //   auction: '0x951Cc69504d39b3eDb155CA99f555E47E044c2F1',
  //   sales: '0xa06aecbb8CD9328667f8E05f288e5b3ac1CFf852',
  //   bundleSales: '0x56aD389A02Ea9d63f13106cB0c161342f537a92e',
  //   factory: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
  //   privateFactory: '0xe5841838Dd7e522f217DfFBCEaef82F04EC649Cd', //FantomNFTFactoryPrivate
  //   artFactory: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
  //   privateArtFactory: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  // },
  // [ChainId.SPARTA]: {
  //   auction: '0xc40AE55E423256E3Ad570cA17402A6613FE20608',
  //   sales: '0x9a4642Cc182ac038258f5B47be7c5538dB6f8399',
  //   bundleSales: '0x1779D9B53098a275d8d71429f0336fdDf4944d86',
  //   factory: '0x6F124f6DABA769Eb351a1EeC4C0224F9A0a524cE', //FantomNFTFactory
  //   privateFactory: '0x49191888c75134E60889c5407A87Cf07F836f677', //FantomNFTFactoryPrivate
  //   artFactory: '0x56059938534AD39616b0b57B7F3c3FE074C3ab39', //FantomArtFactory
  //   privateArtFactory: '0xC6A8025f10F87620A165E9A53844eBa6217D5406', //FantomArtFactoryPrivate
  // },
  [ChainId.MAINNET]: {
    auction: '0x951Cc69504d39b3eDb155CA99f555E47E044c2F1',
    sales: '0xa06aecbb8CD9328667f8E05f288e5b3ac1CFf852',
    bundleSales: '0x56aD389A02Ea9d63f13106cB0c161342f537a92e',
    factory: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
    privateFactory: '0xe5841838Dd7e522f217DfFBCEaef82F04EC649Cd', //FantomNFTFactoryPrivate
    artFactory: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
    privateArtFactory: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  },
  [ChainId.SPARTA]: {
    auction: '0x7aDcf7F865b0029cB4ebe010203292347Dd34F2B',
    sales: '0x4cdF2A174ada12A2B0B6a1D7EdBE043C5cFde0b1', //marketplace
    bundleSales: '0x647de38E03beA2EafB29a1C564003F969b697d43', //bundlemarketplace
    factory: '0x7065D5F9DB7Ba6bd1a4aCEE07b7a037C75067ABc', //FantomNFTFactory
    privateFactory: '0x721DEF2bDe249A02a6C49f9Bd4022c1aa1bE549f', //FantomNFTFactoryPrivate
    artFactory: '0x48C18Da6A6899e7817Ea75adAF70477B64059cDF', //FantomArtFactory
    privateArtFactory: '0x2D221673974374d6b630ABa44a007F301aA775C0', //FantomArtFactoryPrivate
  },
};
