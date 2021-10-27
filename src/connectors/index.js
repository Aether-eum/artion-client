import { ChainId } from 'hadeswap-beta-sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import ARTION_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.MAINNET]: 'https://rpc.polis.tech',
    }
  : {
      [ChainId.SPARTA]: 'https://sparta-rpc.polis.tech',
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.SPARTA,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        333999, // fantom
      ]
    : [
        333888, // fantom testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://rpc.polis.tech',
  appName: 'Polis',
  appLogoUrl: ARTION_LOGO_URL,
});
