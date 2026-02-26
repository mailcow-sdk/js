# MailcowSdkJs.AppPasswordsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAppPassword**](AppPasswordsApi.md#createAppPassword) | **POST** /api/v1/add/app-passwd | Create App Password
[**deleteAppPassword**](AppPasswordsApi.md#deleteAppPassword) | **POST** /api/v1/delete/app-passwd | Delete App Password
[**getAppPassword**](AppPasswordsApi.md#getAppPassword) | **GET** /api/v1/get/app-passwd/all/{mailbox} | Get App Password



## createAppPassword

> CreateAlias200Response createAppPassword(opts)

Create App Password

Using this endpoint you can create a new app password for a specific mailbox.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AppPasswordsApi();
let opts = {
  'createAppPasswordRequest': new MailcowSdkJs.CreateAppPasswordRequest() // CreateAppPasswordRequest | 
};
apiInstance.createAppPassword(opts, (error, data, response) => {
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
 **createAppPasswordRequest** | [**CreateAppPasswordRequest**](CreateAppPasswordRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAppPassword

> CreateAlias200Response deleteAppPassword(opts)

Delete App Password

Using this endpoint you can delete a single app password.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AppPasswordsApi();
let opts = {
  'deleteAppPasswordRequest': new MailcowSdkJs.DeleteAppPasswordRequest() // DeleteAppPasswordRequest | 
};
apiInstance.deleteAppPassword(opts, (error, data, response) => {
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
 **deleteAppPasswordRequest** | [**DeleteAppPasswordRequest**](DeleteAppPasswordRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAppPassword

> getAppPassword(mailbox, opts)

Get App Password

Using this endpoint you can get all app passwords from a specific mailbox.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.AppPasswordsApi();
let mailbox = "hello@mailcow.email"; // String | mailbox of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getAppPassword(mailbox, opts, (error, data, response) => {
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
 **mailbox** | **String**| mailbox of entry you want to get | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

