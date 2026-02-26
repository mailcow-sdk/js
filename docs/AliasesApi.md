# MailcowSdkJs.AliasesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlias**](AliasesApi.md#createAlias) | **POST** /api/v1/add/alias | Create alias
[**createTimeLimitedAlias**](AliasesApi.md#createTimeLimitedAlias) | **POST** /api/v1/add/time_limited_alias | Create time limited alias
[**deleteAlias**](AliasesApi.md#deleteAlias) | **POST** /api/v1/delete/alias | Delete alias
[**getAliases**](AliasesApi.md#getAliases) | **GET** /api/v1/get/alias/{id} | Get aliases
[**getTimeLimitedAliases**](AliasesApi.md#getTimeLimitedAliases) | **GET** /api/v1/get/time_limited_aliases/{mailbox} | Get time limited aliases
[**updateAlias**](AliasesApi.md#updateAlias) | **POST** /api/v1/edit/alias | Update alias



## createAlias

> CreateAlias200Response createAlias(opts)

Create alias

You may create your own mailbox alias using this action. It takes a JSON object containing a domain informations. Only one &#x60;goto*&#x60; option can be used, for ex. if you want learn as spam, then send just &#x60;goto_spam &#x3D; 1&#x60; in request body.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AliasesApi();
let opts = {
  'createAliasRequest': new MailcowSdkJs.CreateAliasRequest() // CreateAliasRequest | 
};
apiInstance.createAlias(opts, (error, data, response) => {
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
 **createAliasRequest** | [**CreateAliasRequest**](CreateAliasRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTimeLimitedAlias

> CreateAlias200Response createTimeLimitedAlias(opts)

Create time limited alias

You may create a time limited alias using this action. It takes a JSON object containing a domain and mailbox informations. Mailcow will generate a random alias.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AliasesApi();
let opts = {
  'createTimeLimitedAliasRequest': new MailcowSdkJs.CreateTimeLimitedAliasRequest() // CreateTimeLimitedAliasRequest | 
};
apiInstance.createTimeLimitedAlias(opts, (error, data, response) => {
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
 **createTimeLimitedAliasRequest** | [**CreateTimeLimitedAliasRequest**](CreateTimeLimitedAliasRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAlias

> CreateAlias200Response deleteAlias(opts)

Delete alias

You can delete one or more aliases.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AliasesApi();
let opts = {
  'requestBody': ["6"] // [String] | 
};
apiInstance.deleteAlias(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAliases

> getAliases(id, opts)

Get aliases

You can list mailbox aliases existing in system.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AliasesApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getAliases(id, opts, (error, data, response) => {
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


## getTimeLimitedAliases

> getTimeLimitedAliases(mailbox, opts)

Get time limited aliases

You can list time limited mailbox aliases existing in system.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AliasesApi();
let mailbox = "domain.tld"; // String | mailbox you want to get aliasses from
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getTimeLimitedAliases(mailbox, opts, (error, data, response) => {
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
 **mailbox** | **String**| mailbox you want to get aliasses from | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlias

> CreateAlias200Response updateAlias(opts)

Update alias

You can update one or more aliases per request. You can also send just attributes you want to change

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AliasesApi();
let opts = {
  'updateAliasRequest': new MailcowSdkJs.UpdateAliasRequest() // UpdateAliasRequest | 
};
apiInstance.updateAlias(opts, (error, data, response) => {
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
 **updateAliasRequest** | [**UpdateAliasRequest**](UpdateAliasRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

