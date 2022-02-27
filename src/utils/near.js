/** @format */

import { connect, keyStores, WalletAccount, WalletConnection, Contract } from 'near-api-js'
import * as buffer from 'buffer'
window.Buffer = buffer.Buffer

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

export const wallet = (instance) => {
    return new WalletConnection(instance)
}

export const account = (instance) => {
    return new WalletAccount(instance)
}

export const contract = (account) => {
    return new Contract(account, 'irfanismail.testnet', {
        viewMethods: ['get_count'],
        changeMethods: ['increment', 'decrement'],
        sender: account
    })
}
