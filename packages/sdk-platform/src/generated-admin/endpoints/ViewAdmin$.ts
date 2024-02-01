/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { FullViewInfo } from '../../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../../generated-definitions/ViewUpdate.js'

export class ViewAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to list all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of views&lt;/li&gt;&lt;/ul&gt;
   */
  getViews(queryParams?: { storeId?: string | null }): Promise<IResponseWithSync<ListViewInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListViewInfoArray, 'ListViewInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a view&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  createView(data: ViewCreate, queryParams: { storeId: string | null }): Promise<IResponse<FullViewInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FullViewInfo, 'FullViewInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to delete a view.It will also delete all the related sections&lt;/b&gt;&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteView_ByViewId(viewId: string, queryParams: { storeId: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views/{viewId}'.replace('{namespace}', this.namespace).replace('{viewId}', viewId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: view data&lt;/li&gt;&lt;/ul&gt;
   */
  getView_ByViewId(viewId: string, queryParams?: { storeId?: string | null }): Promise<IResponseWithSync<FullViewInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views/{viewId}'.replace('{namespace}', this.namespace).replace('{viewId}', viewId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FullViewInfo, 'FullViewInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated view data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  updateView_ByViewId(viewId: string, data: ViewUpdate, queryParams: { storeId: string | null }): Promise<IResponse<FullViewInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views/{viewId}'.replace('{namespace}', this.namespace).replace('{viewId}', viewId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FullViewInfo, 'FullViewInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
