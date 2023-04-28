/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapReceipt = z.object({
  productId: z.string(),
  transactionId: z.string(),
  receiptData: z.string(),
  excludeOldTransactions: z.boolean().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish()
})

export interface AppleIapReceipt extends z.TypeOf<typeof AppleIapReceipt> {}