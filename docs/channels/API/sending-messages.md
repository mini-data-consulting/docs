---
sidebar_position: 1
---

# Sending Messages

To send a message through the API channel, make a POST request to the `/api-channel` endpoint.

### Request Example

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
    "message": "Hello world!",
    "metadata": {
      "business_id": "<business-id>",
      "customer_id": "<customer-id>"
    }
  }'
```

### Request Parameters

| Parameter       | Type   | Required | Description                                                                          |
| --------------- | ------ | -------- | ------------------------------------------------------------------------------------ |
| `channel_id`    | string | Yes      | The identifier for your API channel                                                  |
| `user`          | object | Yes      | Object containing user information                                                   |
| `user.identity` | string | Yes      | Unique identifier for the user                                                       |
| `user.name`     | string | Yes      | Display name of the user                                                             |
| `message`       | string | Yes      | The message text to be processed by the AI                                           |
| `metadata`      | object | No       | Additional data to include with the request (returned unchanged in webhook response) |

### Authentication

Include your API key in the `Authorization` header using the Bearer token format. For more information about obtaining and managing API keys, see [API Keys](./api-keys.md).

### Response

Upon successful submission, the API returns a 200 status code with the following JSON response:

```json
{
  "status": "queued",
  "message": "Message received and will be processed"
}
```

| Field     | Type   | Description                                        |
| --------- | ------ | -------------------------------------------------- |
| `status`  | string | Current status of the message ("queued")           |
| `message` | string | A human-readable description of the request status |

Note: This is an asynchronous API. A successful response indicates that the message was received and queued for processing, not that it has been fully processed.
