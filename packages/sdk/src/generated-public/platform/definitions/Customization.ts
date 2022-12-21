/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Customization = z.object({ settings: z.string().nullish() })

export type Customization = z.TypeOf<typeof Customization>