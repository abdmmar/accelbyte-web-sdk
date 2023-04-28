/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketSaleIncrementResult = z.object({ success: z.boolean(), maxSaleCount: z.number().int() })

export interface TicketSaleIncrementResult extends z.TypeOf<typeof TicketSaleIncrementResult> {}