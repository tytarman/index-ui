import * as tokenAddresses from 'constants/ethContractAddresses'
import bedBorderLogo from 'assets/bed-border.png'
import dataLogo from 'assets/data-logo.png'
import indexLogo from 'assets/index-token.png'

export const dpiTokenImage = 'https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg'
export interface ProductToken {
  name: string
  symbol: string
  address: string | undefined
  image: string
  coingeckoId: string
  tokensetsId: string
  fees: { streamingFee: string } | undefined
}

export const DefiPulseIndex: ProductToken = {
  name: 'DeFi Pulse Index',
  symbol: 'DPI',
  address: tokenAddresses.dpiTokenAddress,
  image: dpiTokenImage,
  coingeckoId: 'defipulse-index',
  tokensetsId: 'dpi',
  fees: {
    streamingFee: '0.95%',
  },
}

export const IndexToken: ProductToken = {
  name: 'Index Token',
  symbol: 'INDEX',
  address: tokenAddresses.indexTokenAddress,
  image: indexLogo,
  coingeckoId: 'index-cooperative',
  tokensetsId: 'index',
  fees: undefined,
}

export const Ethereum2xFlexibleLeverageIndex: ProductToken = {
  name: 'Ethereum 2x Flexible Leverage Index',
  symbol: 'ETH2x-FLI',
  address: tokenAddresses.eth2xfliTokenAddress,
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg',
  coingeckoId: 'eth-2x-flexible-leverage-index',
  tokensetsId: 'ethfli',
  fees: {
    streamingFee: '1.95%',
  },
}

export const MetaverseIndex: ProductToken = {
  name: 'Metaverse Index',
  symbol: 'MVI',
  address: tokenAddresses.mviTokenAddress,
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg',
  coingeckoId: 'metaverse-index',
  tokensetsId: 'mvi',
  fees: {
    streamingFee: '0.95%',
  },
}

export const Bitcoin2xFlexibleLeverageIndex: ProductToken = {
  name: 'Bitcoin 2x Flexible Leverage Index',
  symbol: 'BTC2x-FLI',
  address: tokenAddresses.btc2xfliTokenAddress,
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/fli_btc.svg',
  coingeckoId: 'btc-2x-flexible-leverage-index',
  tokensetsId: 'btcfli',
  fees: {
    streamingFee: '1.95%',
  },
}

export const BedIndex: ProductToken = {
  name: 'Bankless BED Index',
  symbol: 'BED',
  address: tokenAddresses.bedTokenAddress,
  image: bedBorderLogo,
  coingeckoId: 'bankless-bed-index',
  tokensetsId: 'bed',
  fees: {
    streamingFee: '0.25%',
  },
}

export const DataIndex: ProductToken = {
  name: 'Data Economy Index',
  symbol: 'DATA',
  address: tokenAddresses.dataTokenAddress,
  image: dataLogo,
  coingeckoId: 'data-economy-index',
  tokensetsId: 'data',
  fees: {
    streamingFee: '0.95%',
  },
}

export const productTokensBySymbol = {
  'DPI': DefiPulseIndex,
  'MVI': MetaverseIndex,
  'ETH2x-FLI': Ethereum2xFlexibleLeverageIndex,
  'INDEX': IndexToken,
  'BTC2x-FLI': Bitcoin2xFlexibleLeverageIndex,
  'BED': BedIndex,
  'DATA': DataIndex,
}

const indexNames = [
  DefiPulseIndex,
  MetaverseIndex,
  Ethereum2xFlexibleLeverageIndex,
  IndexToken,
  Bitcoin2xFlexibleLeverageIndex,
  BedIndex,
  DataIndex,
]

export default indexNames
