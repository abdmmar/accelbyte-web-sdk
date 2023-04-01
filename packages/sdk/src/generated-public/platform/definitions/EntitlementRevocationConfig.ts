/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConsumableEntitlementRevocationConfig } from './ConsumableEntitlementRevocationConfig'
import { DurableEntitlementRevocationConfig } from './DurableEntitlementRevocationConfig'

export const EntitlementRevocationConfig = z.object({
  durable: DurableEntitlementRevocationConfig.nullish(),
  consumable: ConsumableEntitlementRevocationConfig.nullish()
})

export interface EntitlementRevocationConfig extends z.TypeOf<typeof EntitlementRevocationConfig> {}
