---
sidebar_position: 3
---

# Response Webhook

Response webhooks allow you to receive asynchronous responses from your AI agents. When an agent processes a request, it can send the response to a specified webhook endpoint in your application.

## Configuring Webhooks

To configure a webhook endpoint:

1. Navigate to the API channel settings
2. Enter your webhook URL
3. Set up a webhook secret for security

## Webhook Verification Process

When configuring a webhook, the system performs an automatic verification process to ensure the endpoint is valid and secure:

1. The endpoint must use HTTPS protocol for security
2. A GET request is sent to your webhook URL
3. Your endpoint must respond with a 200 status code
4. The response body must exactly match the webhook secret you provided

### Implementing the Verification Endpoint

Your webhook endpoint should handle both GET and POST requests:

- GET requests are used for initial verification
- POST requests receive the actual webhook payloads

Example implementation in Node.js:

```javascript
app.get("/webhook", (req, res) => {
  // Return the webhook secret for verification
  res.send(process.env.WEBHOOK_SECRET);
});

app.post("/webhook", (req, res) => {
  // Handle actual webhook payloads
  // ... webhook handling logic ...
  res.sendStatus(200);
});
```

If verification fails, you'll receive one of these error responses:

- "Invalid webhook URL. Must use HTTPS protocol."
- "Failed to verify webhook endpoint" (if the endpoint is unreachable)
- "Secret mismatch" (if the returned secret doesn't match)

## Security

Webhook requests are secured using HMAC SHA-256 signatures. Each request includes a signature in the `X-Signature` header that you can use to verify the authenticity of the webhook payload.

### Verifying Signatures

To verify webhook signatures:

1. Get the signature from the `X-Signature` header
2. Create an HMAC SHA-256 hash of the raw request body using your webhook secret
3. Compare the generated hash with the signature

Example signature verification in Node.js:

```javascript
const crypto = require("crypto");
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac("sha256", secret);
  const expectedSignature = hmac.update(JSON.stringify(payload)).digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

## Webhook Payload

The webhook payload contains the agent's response and any metadata that was included in the original request.

### Sample Payload

```json
{
  "user": {
    "name": "John Doe",
    "identity": "user-uuid-12345"
  },
  "chat_id": 1202,
  "conversation_id": 1227,
  "role": "assistant",
  "type": "text",
  "content": {
    "text": "Please select a service from the options below..."
  },
  "timestamp": 1732546454586,
  "metadata": {
    "customer_id": "cust_123",
    "session_id": "sess_456"
  }
}
```

### Payload Fields

| Field             | Type   | Description                                                  |
| ----------------- | ------ | ------------------------------------------------------------ |
| `user`            | Object | Contains user information including name and unique identity |
| `chat_id`         | Number | Unique identifier for the chat                               |
| `conversation_id` | Number | Unique identifier for the conversation                       |
| `role`            | String | Indicates the message sender ("assistant" or "user")         |
| `type`            | String | Type of message content (e.g., "text")                       |
| `content`         | Object | Contains the actual message content                          |
| `timestamp`       | Number | Unix timestamp in milliseconds                               |
| `metadata`        | Object | Custom metadata passed in the original request               |

### Metadata Handling

Any metadata included in your original API request will be automatically included in the webhook response. This allows you to maintain context and track conversations across your application.

## Error Handling

The webhook system implements retry logic for failed deliveries. However, you should ensure your webhook endpoint:

- Responds quickly (within 10 seconds)
- Returns a 2xx status code to acknowledge receipt
- Handles duplicate deliveries (webhooks may be sent multiple times)

### Retry Mechanism

If your webhook endpoint fails to respond with a 200 status code within 10 seconds, the system will automatically retry the delivery using exponential backoff, with a maximum of 3 retry attempts. After all retry attempts are exhausted, the delivery will be considered permanently failed.

**Note:** Due to these retries, your webhook handler must be idempotent as it may receive the same payload multiple times.

## Best Practices

1. **Implement Signature Verification**: Always verify webhook signatures to ensure the authenticity of requests.

2. **Use HTTPS**: Your webhook endpoint should use HTTPS to ensure secure data transmission.

3. **Handle Retries**: Design your webhook handler to be idempotent to handle potential duplicate deliveries.

4. **Monitor Webhook Health**: Keep track of webhook delivery success rates and response times.

5. **Store Webhook Logs**: Maintain logs of webhook deliveries for debugging and auditing purposes.

## Testing Webhooks

You can test your webhook integration using the following steps:

1. Set up a test endpoint (e.g., using a service like webhook.site)
2. Configure the webhook URL in your channel settings
3. Send a test message through the API
4. Verify the webhook delivery and payload

For local development, you can use tools like ngrok to receive webhooks on your local machine.
