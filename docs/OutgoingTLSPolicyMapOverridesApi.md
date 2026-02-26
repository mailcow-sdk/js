# MailcowSdkJs.OutgoingTLSPolicyMapOverridesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTLSPolicyMap**](OutgoingTLSPolicyMapOverridesApi.md#createTLSPolicyMap) | **POST** /api/v1/add/tls-policy-map | Create TLS Policy Map
[**deleteTLSPolicyMap**](OutgoingTLSPolicyMapOverridesApi.md#deleteTLSPolicyMap) | **POST** /api/v1/delete/tls-policy-map | Delete TLS Policy Map
[**getTLSPolicyMap**](OutgoingTLSPolicyMapOverridesApi.md#getTLSPolicyMap) | **GET** /api/v1/get/tls-policy-map/{id} | Get TLS Policy Map



## createTLSPolicyMap

> CreateAlias200Response createTLSPolicyMap(opts)

Create TLS Policy Map

Using this endpoint you can create a TLS policy map override.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.OutgoingTLSPolicyMapOverridesApi();
let opts = {
  'createTLSPolicyMapRequest': new MailcowSdkJs.CreateTLSPolicyMapRequest() // CreateTLSPolicyMapRequest | 
};
apiInstance.createTLSPolicyMap(opts, (error, data, response) => {
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
 **createTLSPolicyMapRequest** | [**CreateTLSPolicyMapRequest**](CreateTLSPolicyMapRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTLSPolicyMap

> CreateAlias200Response deleteTLSPolicyMap(opts)

Delete TLS Policy Map

Using this endpoint you can delete a TLS Policy Map, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.OutgoingTLSPolicyMapOverridesApi();
let opts = {
  'deleteTLSPolicyMapRequest': new MailcowSdkJs.DeleteTLSPolicyMapRequest() // DeleteTLSPolicyMapRequest | 
};
apiInstance.deleteTLSPolicyMap(opts, (error, data, response) => {
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
 **deleteTLSPolicyMapRequest** | [**DeleteTLSPolicyMapRequest**](DeleteTLSPolicyMapRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTLSPolicyMap

> getTLSPolicyMap(id, opts)

Get TLS Policy Map

Using this endpoint you can get all TLS policy map override maps.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.OutgoingTLSPolicyMapOverridesApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getTLSPolicyMap(id, opts, (error, data, response) => {
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

