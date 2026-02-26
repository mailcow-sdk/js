# MailcowSdkJs.OAuthClientsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOAuthClient**](OAuthClientsApi.md#createOAuthClient) | **POST** /api/v1/add/oauth2-client | Create oAuth Client
[**deleteOAuthClient**](OAuthClientsApi.md#deleteOAuthClient) | **POST** /api/v1/delete/oauth2-client | Delete oAuth Client
[**getOAuthClients**](OAuthClientsApi.md#getOAuthClients) | **GET** /api/v1/get/oauth2-client/{id} | Get oAuth Clients



## createOAuthClient

> CreateAlias200Response createOAuthClient(opts)

Create oAuth Client

Using this endpoint you can create a oAuth clients.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.OAuthClientsApi();
let opts = {
  'createOAuthClientRequest': new MailcowSdkJs.CreateOAuthClientRequest() // CreateOAuthClientRequest | 
};
apiInstance.createOAuthClient(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOAuthClientRequest** | [**CreateOAuthClientRequest**](CreateOAuthClientRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOAuthClient

> CreateAlias200Response deleteOAuthClient(opts)

Delete oAuth Client

Using this endpoint you can delete a oAuth client, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.OAuthClientsApi();
let opts = {
  'deleteOAuthClientRequest': new MailcowSdkJs.DeleteOAuthClientRequest() // DeleteOAuthClientRequest | 
};
apiInstance.deleteOAuthClient(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOAuthClientRequest** | [**DeleteOAuthClientRequest**](DeleteOAuthClientRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOAuthClients

> getOAuthClients(id, opts)

Get oAuth Clients

Using this endpoint you can get all oAuth clients.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.OAuthClientsApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getOAuthClients(id, opts, (error, data, response) => {
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
 **id** | **String**| id of entry you want to get | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

