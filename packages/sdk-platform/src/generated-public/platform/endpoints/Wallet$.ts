/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { PlatformWallet } from '../definitions/PlatformWallet.js'
import { WalletTransactionPagingSlicedResult } from '../definitions/WalletTransactionPagingSlicedResult.js'

export class Wallet$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * get my wallet by currency code and namespace.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li><li><i>Path's namespace</i> : <ul> <li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user wallet</b></li> <li>can be filled with <b>game namespace</b> in order to get <b>game user wallet</b></li> </ul></li></ul>
   */
  getUserMeWallet_ByCurrencyCode(currencyCode: string): Promise<IResponseWithSync<PlatformWallet>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/wallets/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlatformWallet, 'PlatformWallet')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * get a wallet by currency code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li></ul>
   */
  getWallet_ByUserId_ByCurrencyCode(userId: string, currencyCode: string): Promise<IResponseWithSync<PlatformWallet>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlatformWallet, 'PlatformWallet')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List wallet transactions by currency code ordered by create time desc.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:WALLET", action=2 (READ)</li><li><i>Returns</i>: currency transaction info</li></ul>
   */
  getTransactions_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { offset?: number; limit?: number }
  ): Promise<IResponseWithSync<WalletTransactionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/transactions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, WalletTransactionPagingSlicedResult, 'WalletTransactionPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}