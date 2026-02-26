# MailcowSdkJs.AddressRewritingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBCCMap**](AddressRewritingApi.md#createBCCMap) | **POST** /api/v1/add/bcc | Create BCC Map
[**createRecipientMap**](AddressRewritingApi.md#createRecipientMap) | **POST** /api/v1/add/recipient_map | Create Recipient Map
[**deleteBCCMap**](AddressRewritingApi.md#deleteBCCMap) | **POST** /api/v1/delete/bcc | Delete BCC Map
[**deleteRecipientMap**](AddressRewritingApi.md#deleteRecipientMap) | **POST** /api/v1/delete/recipient_map | Delete Recipient Map
[**getBCCMap**](AddressRewritingApi.md#getBCCMap) | **GET** /api/v1/get/bcc/{id} | Get BCC Map
[**getRecipientMap**](AddressRewritingApi.md#getRecipientMap) | **GET** /api/v1/get/recipient_map/{id} | Get Recipient Map



## createBCCMap

> CreateAlias200Response createBCCMap(opts)

Create BCC Map

Using this endpoint you can create a BCC map to forward all mails via a bcc for a given domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AddressRewritingApi();
let opts = {
  'createBCCMapRequest': new MailcowSdkJs.CreateBCCMapRequest() // CreateBCCMapRequest | 
};
apiInstance.createBCCMap(opts, (error, data, response) => {
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
 **createBCCMapRequest** | [**CreateBCCMapRequest**](CreateBCCMapRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRecipientMap

> CreateAlias200Response createRecipientMap(opts)

Create Recipient Map

Using this endpoint you can create a recipient map to forward all mails from one email address to another.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AddressRewritingApi();
let opts = {
  'createRecipientMapRequest': new MailcowSdkJs.CreateRecipientMapRequest() // CreateRecipientMapRequest | 
};
apiInstance.createRecipientMap(opts, (error, data, response) => {
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
 **createRecipientMapRequest** | [**CreateRecipientMapRequest**](CreateRecipientMapRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBCCMap

> CreateAlias200Response deleteBCCMap(opts)

Delete BCC Map

Using this endpoint you can delete a BCC map, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AddressRewritingApi();
let opts = {
  'deleteBCCMapRequest': new MailcowSdkJs.DeleteBCCMapRequest() // DeleteBCCMapRequest | 
};
apiInstance.deleteBCCMap(opts, (error, data, response) => {
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
 **deleteBCCMapRequest** | [**DeleteBCCMapRequest**](DeleteBCCMapRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRecipientMap

> CreateAlias200Response deleteRecipientMap(opts)

Delete Recipient Map

Using this endpoint you can delete a recipient map, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AddressRewritingApi();
let opts = {
  'deleteRecipientMapRequest': new MailcowSdkJs.DeleteRecipientMapRequest() // DeleteRecipientMapRequest | 
};
apiInstance.deleteRecipientMap(opts, (error, data, response) => {
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
 **deleteRecipientMapRequest** | [**DeleteRecipientMapRequest**](DeleteRecipientMapRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBCCMap

> getBCCMap(id, opts)

Get BCC Map

Using this endpoint you can get all BCC maps.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AddressRewritingApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getBCCMap(id, opts, (error, data, response) => {
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


## getRecipientMap

> getRecipientMap(id, opts)

Get Recipient Map

Using this endpoint you can get all recipient maps.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AddressRewritingApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getRecipientMap(id, opts, (error, data, response) => {
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

