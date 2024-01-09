/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ModelUserPlatformInfo = z.object({
  platformAvatarUrl: z.string().nullish(),
  platformDisplayName: z.string().nullish(),
  platformGroup: z.string().nullish(),
  platformId: z.string(),
  platformUserId: z.string().nullish()
})

export interface ModelUserPlatformInfo extends z.TypeOf<typeof ModelUserPlatformInfo> {}
