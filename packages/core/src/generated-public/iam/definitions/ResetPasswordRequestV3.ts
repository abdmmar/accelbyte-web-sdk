/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResetPasswordRequestV3 = z.object({ code: z.string(), emailAddress: z.string(), newPassword: z.string() })

export type ResetPasswordRequestV3 = z.TypeOf<typeof ResetPasswordRequestV3>
