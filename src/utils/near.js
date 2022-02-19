/** @format */

import { connect, keyStores, WalletAccount } from 'near-api-js'

const config = {
    networkId: 'testnet',
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org'
}

export const instance = async () => {
    const near = await connect(config)
    return near
}

export const account = (instance) => {
    const wallet = new WalletAccount(instance)
    return wallet
}
