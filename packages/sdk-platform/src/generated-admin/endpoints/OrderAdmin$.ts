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
import { AdminOrderCreate } from '../../generated-definitions/AdminOrderCreate.js'
import { OrderGrantInfo } from '../../generated-definitions/OrderGrantInfo.js'
import { OrderHistoryInfoArray } from '../../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../../generated-definitions/OrderInfo.js'
import { OrderPagingResult } from '../../generated-definitions/OrderPagingResult.js'
import { OrderPagingSlicedResult } from '../../generated-definitions/OrderPagingSlicedResult.js'
import { OrderRefundCreate } from '../../generated-definitions/OrderRefundCreate.js'
import { OrderStatistics } from '../../generated-definitions/OrderStatistics.js'
import { OrderUpdate } from '../../generated-definitions/OrderUpdate.js'
import { PurchasedItemCount } from '../../generated-definitions/PurchasedItemCount.js'
import { TradeNotification } from '../../generated-definitions/TradeNotification.js'

export class OrderAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Query orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query orders&lt;/li&gt;&lt;/ul&gt;
   */
  getOrders(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    orderNos?: string[]
    sortBy?: string | null
    startTime?: string | null
    status?:
      | 'CHARGEBACK'
      | 'CHARGEBACK_REVERSED'
      | 'CHARGED'
      | 'CLOSED'
      | 'DELETED'
      | 'FULFILLED'
      | 'FULFILL_FAILED'
      | 'INIT'
      | 'REFUNDED'
      | 'REFUNDING'
      | 'REFUND_FAILED'
    withTotal?: boolean | null
  }): Promise<IResponseWithSync<OrderPagingResult>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/orders'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderPagingResult, 'OrderPagingResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get Order Statistics.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order statistics&lt;/li&gt;&lt;/ul&gt;
   */
  getOrdersStats(): Promise<IResponseWithSync<OrderStatistics>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/orders/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderStatistics, 'OrderStatistics')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get order by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order instance&lt;/li&gt;&lt;/ul&gt;
   */
  getOrder_ByOrderNo(orderNo: string): Promise<IResponseWithSync<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/orders/{orderNo}'
      .replace('{namespace}', this.namespace)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query user orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
   */
  getOrders_ByUserId(
    userId: string,
    queryParams?: {
      itemId?: string | null
      limit?: number
      offset?: number
      status?:
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'CHARGED'
        | 'CLOSED'
        | 'DELETED'
        | 'FULFILLED'
        | 'FULFILL_FAILED'
        | 'INIT'
        | 'REFUNDED'
        | 'REFUNDING'
        | 'REFUND_FAILED'
    }
  ): Promise<IResponseWithSync<OrderPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderPagingSlicedResult, 'OrderPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Admin Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;sandbox default value is &lt;b&gt;false&lt;/b&gt;&lt;/li&gt;&lt;li&gt;platform default value is &lt;b&gt;Other&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for ext field&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  createOrder_ByUserId(userId: string, data: AdminOrderCreate): Promise<IResponse<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Refund order by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ORDER&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateRefund_ByOrderNo(orderNo: string, data: OrderRefundCreate): Promise<IResponse<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/orders/{orderNo}/refund'
      .replace('{namespace}', this.namespace)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get an order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
   */
  getOrder_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update order status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated order&lt;/li&gt;&lt;/ul&gt;
   */
  updateOrder_ByUserId_ByOrderNo(userId: string, orderNo: string, data: OrderUpdate): Promise<IResponse<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get the count of purchased item which is the order target.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Item purchased count&lt;/li&gt;&lt;/ul&gt;
   */
  getOrdersCountOfItem_ByUserId(userId: string, queryParams: { itemId: string | null }): Promise<IResponseWithSync<PurchasedItemCount>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/countOfItem'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PurchasedItemCount, 'PurchasedItemCount')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user order grant that fulfilled by this order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order grant&lt;/li&gt;&lt;/ul&gt;
   */
  getGrant_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<OrderGrantInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}/grant'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderGrantInfo, 'OrderGrantInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Fulfill an order if the order is charged but fulfill failed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfilled order&lt;/li&gt;&lt;/ul&gt;
   */
  updateFulfill_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponse<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}/fulfill'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user order history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order history&lt;/li&gt;&lt;/ul&gt;
   */
  getHistory_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<OrderHistoryInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OrderHistoryInfoArray, 'OrderHistoryInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Download user order receipt by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order receipt pdf&lt;/li&gt;&lt;/ul&gt;
   */
  getReceiptPdf_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}/receipt.pdf'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used as a web hook for payment notification from justice payment service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Process result&lt;/li&gt;&lt;/ul&gt;
   */
  createNotification_ByUserId_ByOrderNo(userId: string, orderNo: string, data: TradeNotification): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/orders/{orderNo}/notifications'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
