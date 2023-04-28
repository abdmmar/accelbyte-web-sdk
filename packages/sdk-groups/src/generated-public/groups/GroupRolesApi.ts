/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AssignRoleToMemberRequestV1 } from './definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from './definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from './definitions/GetUserGroupInformationResponseV1.js'
import { GroupRoles$ } from './endpoints/GroupRoles$.js'
import { RemoveRoleFromMemberRequestV1 } from './definitions/RemoveRoleFromMemberRequestV1.js'

export function GroupRolesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Required Member Role Permission: "GROUP:ROLE [READ]"</p> <p>This endpoint is used to get list of member roles</p> <p>Action Code: 73201</p>
   */
  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to get list of member roles</p> <p>Action Code: 73201</p>
   */
  async function getRoles_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRoles_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: "GROUP:ROLE [UPDATE]</p> <p>This endpoint is used to assign role to group member</p> <p>Action Code: 73204</p>
   */
  async function createMember_ByMemberRoleId(
    memberRoleId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: "GROUP:ROLE [UPDATE]"</p> <p>This endpoint is used to remove role from group member</p> <p>Action Code: 73204</p>
   */
  async function deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<unknown> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: "GROUP:ROLE [UPDATE]</p> <p>This endpoint is used to assign role to group member</p> <p>Action Code: 73204</p>
   */
  async function createMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMember_ByMemberRoleId_ByGroupId(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: "GROUP:ROLE [UPDATE]"</p> <p>This endpoint is used to remove role from group member</p> <p>Action Code: 73204</p>
   */
  async function deleteMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: RemoveRoleFromMemberRequestV1
  ): Promise<unknown> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMember_ByMemberRoleId_ByGroupId(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles,
    getRoles_ByNS,
    createMember_ByMemberRoleId,
    deleteMember_ByMemberRoleId,
    createMember_ByMemberRoleId_ByGroupId,
    deleteMember_ByMemberRoleId_ByGroupId
  }
}