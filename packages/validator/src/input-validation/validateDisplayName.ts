/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import XRegExp from 'xregexp'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_DISPLAY_NAME_LENGTH, MIN_DISPLAY_NAME_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateDisplayNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateDisplayNameErrorType = z.infer<typeof ValidateDisplayNameErrorType>

export interface ValidateDisplayNameOptions {
  allowUnicode?: boolean
  isRequired?: boolean
  strictlyAllowSpecialCharacters?: boolean
  maxLength?: number
  minLength?: number
}

/**
 *
 * @param value
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param isRequired
 * @param strictlyAllowSpecialCharacters (true: allow (',. -) in the mid of value, false: Only allow Alpha Numeric)
 * @param maxLength
 *
 * @default allowUnicode false
 * @default isRequired true
 * @default strictlyAllowSpecialCharacters true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_DISPLAY_NAME_LENGTH
 */
export const validateDisplayName = (
  value: string,
  {
    allowUnicode = false,
    isRequired = true,
    strictlyAllowSpecialCharacters = true,
    maxLength = MAX_DISPLAY_NAME_LENGTH,
    minLength = MIN_DISPLAY_NAME_LENGTH
  }: ValidateDisplayNameOptions = {}
) => {
  const LETTER_OR_DIGIT = '[a-zA-Z0-9]'
  const ALLOWED_SPECIAL_CHARACTERS = "[',. -]"
  const REGEX = `^${LETTER_OR_DIGIT}+(${ALLOWED_SPECIAL_CHARACTERS}${LETTER_OR_DIGIT}+)*$`

  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateDisplayNameErrorType.enum.empty
  }

  if (allowUnicode && !strictlyAllowSpecialCharacters && !XRegExp('^[\\pL\\pN\\pM]*$').test(value)) {
    return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (allowUnicode && strictlyAllowSpecialCharacters && !XRegExp("^[\\pL\\pN\\pM]+([',. -][\\pL\\pN]+)*$").test(value)) {
    return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (!allowUnicode && !strictlyAllowSpecialCharacters && !matches(value, /^\w*$/g)) {
    return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (!allowUnicode && strictlyAllowSpecialCharacters && value.trim() !== value) {
    return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (!allowUnicode && strictlyAllowSpecialCharacters && !matches(value, REGEX)) {
    return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  return validateLength(value, {
    max: maxLength,
    min: minLength
  })
}
