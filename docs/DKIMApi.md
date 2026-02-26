# MailcowSdkJs.DKIMApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDKIMKey**](DKIMApi.md#deleteDKIMKey) | **POST** /api/v1/delete/dkim | Delete DKIM Key
[**duplicateDKIMKey**](DKIMApi.md#duplicateDKIMKey) | **POST** /api/v1/add/dkim_duplicate | Duplicate DKIM Key
[**generateDKIMKey**](DKIMApi.md#generateDKIMKey) | **POST** /api/v1/add/dkim | Generate DKIM Key
[**getDKIMKey**](DKIMApi.md#getDKIMKey) | **GET** /api/v1/get/dkim/{domain} | Get DKIM Key



## deleteDKIMKey

> CreateAlias200Response deleteDKIMKey(opts)

Delete DKIM Key

Using this endpoint a existing DKIM Key can be deleted

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DKIMApi();
let opts = {
  'requestBody': ["[\"mailcow.tld\"]"] // [String] | 
};
apiInstance.deleteDKIMKey(opts, (error, data, response) => {
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


## duplicateDKIMKey

> CreateAlias200Response duplicateDKIMKey(opts)

Duplicate DKIM Key

Using this endpoint you can duplicate the DKIM Key of one domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DKIMApi();
let opts = {
  'duplicateDKIMKeyRequest': new MailcowSdkJs.DuplicateDKIMKeyRequest() // DuplicateDKIMKeyRequest | 
};
apiInstance.duplicateDKIMKey(opts, (error, data, response) => {
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
 **duplicateDKIMKeyRequest** | [**DuplicateDKIMKeyRequest**](DuplicateDKIMKeyRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateDKIMKey

> CreateAlias200Response generateDKIMKey(opts)

Generate DKIM Key

Using this endpoint you can generate new DKIM keys.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DKIMApi();
let opts = {
  'generateDKIMKeyRequest': new MailcowSdkJs.GenerateDKIMKeyRequest() // GenerateDKIMKeyRequest | 
};
apiInstance.generateDKIMKey(opts, (error, data, response) => {
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
 **generateDKIMKeyRequest** | [**GenerateDKIMKeyRequest**](GenerateDKIMKeyRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDKIMKey

> getDKIMKey(domain, opts)

Get DKIM Key

Using this endpoint you can get the DKIM public key for a specific domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DKIMApi();
let domain = "domain_example"; // String | name of domain
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getDKIMKey(domain, opts, (error, data, response) => {
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
 **domain** | **String**| name of domain | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

