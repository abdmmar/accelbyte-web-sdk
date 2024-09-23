/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { Watchdogs$ } from './endpoints/Watchdogs$.js'

export function WatchdogsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getConnect_ByWatchdogId(watchdogID: string): Promise<AxiosResponse<unknown>> {
    const $ = new Watchdogs$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConnect_ByWatchdogId(watchdogID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConnect_ByWatchdogId_ByNS(watchdogID: string): Promise<AxiosResponse<unknown>> {
    const $ = new Watchdogs$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConnect_ByWatchdogId_ByNS(watchdogID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This is to support local ds development scenarios Required Permission: NAMESPACE:{namespace}:AMS:LOCALDS [CREATE]
     */
    getConnect_ByWatchdogId,
    /**
     * Required Permission: NAMESPACE:{namespace}:ARMADA:WATCHDOG [CREATE]
     */
    getConnect_ByWatchdogId_ByNS
  }
}
