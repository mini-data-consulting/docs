---
sidebar_position: 2
---

# Accessing via API

The Query Generation API channel allows you to integrate Periscope's AI-powered query generation capabilities directly into your applications through RESTful endpoints. This section covers:

## Overview

The Query Generation API channel provides a simple way to send requests to Periscope's AI system to generate queries programmatically. When you send a message through the API:
For information on how to set up the API channel, please refer to the [API Channel Setup Guide](../../channels/API/API.md).

1. The system immediately returns a 200 status code to acknowledge that your message has been successfully queued.
2. Your message is processed asynchronously by the AI system.
3. Once processing is complete, the generated query or response is sent to your configured webhook endpoint.
   - If no webhook is configured, you won't receive the AI's response.
   - See [Response Webhook](../../channels/API/response-webhook.md) for setup instructions.
4. Any metadata object included in your API request will be returned unchanged with the response.
   - This allows you to maintain context between your request and response.
   - For details on metadata handling, see [Response Webhook](../../channels/API/response-webhook.md).

## Sending a Query Generation Request

You can send a query generation request using a `POST` request to the `/api-channel` endpoint.

**Example Request:**

```bash
curl -X POST 'https://dingg.periscopechat.com/api-channel' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <your-api-key>' \
  -d '{
    "channel_id": "<channel-id>",
    "user": {
      "identity": "<user-id>",
      "name": "<user-name>"
    },
    "message": "Show me total sales for last month",
    "metadata": {
      "query_filters": [{
        "table_name": "<table-name>",
        "column_name": "<column-name>",
        "values": "<value or comma-separated-values>"
      },{
        "table_name": "<another-table-name>",
        "column_name": "<another-column-name>",
        "values": "<another-value>"
      }]
    }
  }'
```

### Metadata and Query Filters

The `metadata` object in your request is returned unchanged in the response. For query generation, you can include a `query_filters` array within the `metadata` object. This allows you to specify filters that the AI should apply when generating the query.

Each object in the `query_filters` array should define:

- `table_name`: The name of the table to filter on.
- `column_name`: The name of the column in that table to filter.
- `values`: The value(s) to filter by. For multiple values, provide them as a comma-separated string.

This enables more precise and context-aware query generation.

## Topics

Many concepts from the general API channel apply here. You can refer to the following topics for more details:

- [API Keys](../../channels/API/api-keys.md) - Manage authentication and access control.
- [Response Webhook](../../channels/API/response-webhook.md) - Configure webhook endpoints for asynchronous responses.

For specifics on sending messages and understanding the request/response structure beyond the example above, please refer to the general [Sending Messages](../../channels/API/sending-messages.md) documentation, keeping in mind the `query_filters` addition for query generation.
