/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Slot$ } from './endpoints/Slot$.js'
import { SlotInfo } from '../generated-definitions/SlotInfo.js'
import { SlotInfoArray } from '../generated-definitions/SlotInfoArray.js'
import { SlotMetadataUpdate } from '../generated-definitions/SlotMetadataUpdate.js'

export function SlotApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get list of slots for a given user in namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSlots_ByUserId(userId: string): Promise<SlotInfoArray> {
    const $ = new Slot$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSlots_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Creates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created slot info&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSlot_ByUserId(
    userId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createSlot_ByUserId(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes the slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteSlot_ByUserId_BySlotId(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSlot_ByUserId_BySlotId(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSlot_ByUserId_BySlotId(
    userId: string,
    slotId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<SlotInfo> {
    const $ = new Slot$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateSlot_ByUserId_BySlotId(userId, slotId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates the slot metadata.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateMetadata_ByUserId_BySlotId(userId: string, slotId: string, data: SlotMetadataUpdate): Promise<SlotInfo> {
    const $ = new Slot$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateMetadata_ByUserId_BySlotId(userId, slotId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSlots_ByUserId,
    createSlot_ByUserId,
    deleteSlot_ByUserId_BySlotId,
    getSlot_ByUserId_BySlotId,
    updateSlot_ByUserId_BySlotId,
    updateMetadata_ByUserId_BySlotId
  }
}