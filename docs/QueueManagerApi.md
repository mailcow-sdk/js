# MailcowSdkJs.QueueManagerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteQueue**](QueueManagerApi.md#deleteQueue) | **POST** /api/v1/delete/mailq | Delete Queue
[**flushQueue**](QueueManagerApi.md#flushQueue) | **POST** /api/v1/edit/mailq | Flush Queue
[**getQueue**](QueueManagerApi.md#getQueue) | **GET** /api/v1/get/mailq/all | Get Queue



## deleteQueue

> deleteQueue(opts)

Delete Queue

Using this API you can delete the current mail queue. This will delete all mails in it. This API uses the command: &#x60;postsuper -d&#x60;

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.QueueManagerApi();
let opts = {
  'deleteQueueRequest': new MailcowSdkJs.DeleteQueueRequest() // DeleteQueueRequest | 
};
apiInstance.deleteQueue(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueRequest** | [**DeleteQueueRequest**](DeleteQueueRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## flushQueue

> flushQueue(opts)

Flush Queue

Using this API you can flush the current mail queue. This will try to deliver all mails currently in it. This API uses the command: &#x60;postqueue -f&#x60;

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.QueueManagerApi();
let opts = {
  'flushQueueRequest': new MailcowSdkJs.FlushQueueRequest() // FlushQueueRequest | 
};
apiInstance.flushQueue(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flushQueueRequest** | [**FlushQueueRequest**](FlushQueueRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getQueue

> getQueue()

Get Queue

Get the current mail queue and everything it contains.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.QueueManagerApi();
apiInstance.getQueue((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

