---
sidebar_position: 2
---

# API

The API channel allows you to integrate Periscope's AI capabilities directly into your applications through RESTful endpoints. This section covers:

## Overview

The API channel provides a simple way to send messages to Periscope's AI system programmatically. When you send a message through the API:

1. The system immediately returns a 200 status code to acknowledge that your message has been successfully queued
2. Your message is processed asynchronously by the AI system
3. Once processing is complete, the response is sent to your configured webhook endpoint
   - If no webhook is configured, you won't receive the AI's response
   - See [Response Webhook](./response-webhook.md) for setup instructions
4. Any metadata object included in your API request will be returned unchanged with the response
   - This allows you to maintain context between your request and response
   - For details on metadata handling, see [Response Webhook](./response-webhook.md)

## Topics

- [Sending Messages](./sending-messages.md) - Learn how to send messages using the API
- [API Keys](./api-keys.md) - Manage authentication and access control
- [Response Webhook](./response-webhook.md) - Configure webhook endpoints for asynchronous responses

Choose a topic above to learn more about each aspect of the API integration.
