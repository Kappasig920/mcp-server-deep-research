// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'claude-mcp/filtering';
import { Metadata, asTextContentResult } from 'claude-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Claude from 'claude';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user/createWithList',
  operationId: 'createUsersWithListInput',
};

export const tool: Tool = {
  name: 'create_with_list_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates list of users with given input array\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user',\n  $defs: {\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        email: {\n          type: 'string'\n        },\n        firstName: {\n          type: 'string'\n        },\n        lastName: {\n          type: 'string'\n        },\n        password: {\n          type: 'string'\n        },\n        phone: {\n          type: 'string'\n        },\n        username: {\n          type: 'string'\n        },\n        userStatus: {\n          type: 'integer',\n          description: 'User Status'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: {
          $ref: '#/$defs/user',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          email: {
            type: 'string',
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          userStatus: {
            type: 'integer',
            description: 'User Status',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Claude, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.createWithList(body)));
};

export default { metadata, tool, handler };
