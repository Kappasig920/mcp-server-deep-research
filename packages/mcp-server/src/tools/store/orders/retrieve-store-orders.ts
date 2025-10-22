// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'claude-mcp/filtering';
import { Metadata, asTextContentResult } from 'claude-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Claude from 'claude';

export const metadata: Metadata = {
  resource: 'store.orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/store/order/{orderId}',
  operationId: 'getOrderById',
};

export const tool: Tool = {
  name: 'retrieve_store_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFor valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order',\n  $defs: {\n    order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        complete: {\n          type: 'boolean'\n        },\n        petId: {\n          type: 'integer'\n        },\n        quantity: {\n          type: 'integer'\n        },\n        shipDate: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Order Status',\n          enum: [            'placed',\n            'approved',\n            'delivered'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['orderId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Claude, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.store.orders.retrieve(orderId)));
};

export default { metadata, tool, handler };
