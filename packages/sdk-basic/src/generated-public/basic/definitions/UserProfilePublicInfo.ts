/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfilePublicInfo = z.object({
  userId: z.string().nullish(),
  namespace: z.string().nullish(),
  timeZone: z.string().nullish(),
  avatarSmallUrl: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  avatarLargeUrl: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  publicId: z.string().nullish()
})

export interface UserProfilePublicInfo extends z.TypeOf<typeof UserProfilePublicInfo> {}