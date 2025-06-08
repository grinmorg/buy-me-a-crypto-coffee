import { testWithSynpress } from '@synthetixio/synpress'
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright'

import basicSetup from '../wallet-setup/basic.setup'

const test = testWithSynpress(metaMaskFixtures(basicSetup))

// const { expect } = test

test('should can connected wallet', async ({
  context,
  page,
  metamaskPage,
  extensionId,
}) => {
  // Create a new MetaMask instance with the provided context, page, password, and extension ID
  const metamask = new MetaMask(
    context,
    metamaskPage,
    basicSetup.walletPassword,
    extensionId,
  )

  // Navigate to the root page
  await page.goto('/')

  // Click the connect button to initiate the wallet connection
  await page.getByTestId('rk-connect-button').click()
  await page.getByTestId('rk-wallet-option-io.metamask').waitFor({
    state: 'visible',
    timeout: 10000,
  })
  await page.getByTestId('rk-wallet-option-io.metamask').click()
  await metamask.connectToDapp()

  // if chain selector visible - wallet connected
  await page.getByTestId('rk-chain-button').waitFor({
    state: 'visible',
    timeout: 10000,
  })
})
