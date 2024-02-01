/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { AddDownloadCountResponse } from '../../generated-definitions/AddDownloadCountResponse.js'

export class PublicDownloadCountLegacy$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Requires valid user token
   */
  createDownloadcount_ByContentId(contentId: string): Promise<IResponse<AddDownloadCountResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/{contentId}/downloadcount'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AddDownloadCountResponse, 'AddDownloadCountResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
