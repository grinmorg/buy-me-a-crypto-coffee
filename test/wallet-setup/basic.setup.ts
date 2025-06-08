import { defineWalletSetup } from '@synthetixio/synpress'
import { MetaMask } from '@synthetixio/synpress/playwright'

const SEED_PHRASE =
  'test test test test test test test test test test test junk'
const PASSWORD = 'SynpressIsAwesomeNow!!!'

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const metamask = new MetaMask(context, walletPage, PASSWORD)

  await metamask.importWallet(SEED_PHRASE)

  await metamask.addNetwork({
    name: 'Anvil',
    rpcUrl: 'http://localhost:8545',
    chainId: 31337,
    symbol: 'ETH',
    blockExplorerUrl: 'https://etherscan.io',
  })
})
