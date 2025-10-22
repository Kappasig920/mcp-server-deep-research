// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'claude-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Claude from 'claude';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/logout',
  operationId: 'logoutUser',
};

export const tool: Tool = {
  name: 'logout_users',
  description: 'Logs out current logged in user session',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Claude, args: Record<string, unknown> | undefined) => {
  const response = await client.users.logout().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
