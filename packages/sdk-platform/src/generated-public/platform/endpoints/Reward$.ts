/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RewardInfo } from '../definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../definitions/RewardPagingSlicedResult.js'

export class Reward$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get reward by reward code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:REWARD&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
   */
  getRewardsByCode(queryParams: { rewardCode: string | null }): Promise<IResponseWithSync<RewardInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:REWARD&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
   */
  getReward_ByRewardId(rewardId: string): Promise<IResponseWithSync<RewardInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/{rewardId}'
      .replace('{namespace}', this.namespace)
      .replace('{rewardId}', rewardId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:REWARD&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    limit?: number
    offset?: number
    sortBy?: string[]
  }): Promise<IResponseWithSync<RewardPagingSlicedResult>> {
    const params = { limit: 20, sortBy: ['namespace:asc', 'rewardCode:asc'], ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardPagingSlicedResult, 'RewardPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
