/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GetAllUserLeaderboardsResp } from '../generated-definitions/GetAllUserLeaderboardsResp.js'
import { UserDataAdmin$ } from './endpoints/UserDataAdmin$.js'

export function UserDataAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get user leaderboard rankings&lt;/p&gt;
   */
  async function getLeaderboards_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetAllUserLeaderboardsResp> {
    const $ = new UserDataAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getLeaderboards_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLeaderboards_ByUserId
  }
}
