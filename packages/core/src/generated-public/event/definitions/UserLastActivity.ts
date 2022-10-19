/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserLastActivity = z.object({ LastActivityTime: z.string(), Namespace: z.string(), UserID: z.string() })

export type UserLastActivity = z.TypeOf<typeof UserLastActivity>
