/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TwitchSyncResult = z.object({
  transactionId: z.string().nullish(),
  itemSku: z.string().nullish(),
  iapOrderStatus: z.enum(['VERIFIED', 'FULFILLED', 'FAILED']).nullish()
})

export interface TwitchSyncResult extends z.TypeOf<typeof TwitchSyncResult> {}