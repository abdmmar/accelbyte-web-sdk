/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CheckValidUserIdRequestV4 = z.object({ userIds: z.array(z.string()) })

export interface CheckValidUserIdRequestV4 extends z.TypeOf<typeof CheckValidUserIdRequestV4> {}
