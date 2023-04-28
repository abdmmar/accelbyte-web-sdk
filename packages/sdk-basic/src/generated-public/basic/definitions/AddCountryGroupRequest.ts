/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryObject } from './CountryObject.js'

export const AddCountryGroupRequest = z.object({
  countryGroupCode: z.string().nullish(),
  countryGroupName: z.string().nullish(),
  countries: z.array(CountryObject).nullish()
})

export interface AddCountryGroupRequest extends z.TypeOf<typeof AddCountryGroupRequest> {}