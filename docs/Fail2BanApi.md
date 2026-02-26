# MailcowSdkJs.Fail2BanApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editFail2Ban**](Fail2BanApi.md#editFail2Ban) | **POST** /api/v1/edit/fail2ban | Edit Fail2Ban
[**getFail2BanConfig**](Fail2BanApi.md#getFail2BanConfig) | **GET** /api/v1/get/fail2ban | Get Fail2Ban Config



## editFail2Ban

> CreateAlias200Response editFail2Ban(opts)

Edit Fail2Ban

Using this endpoint you can edit the Fail2Ban config and black or whitelist new ips.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.Fail2BanApi();
let opts = {
  'editFail2BanRequest': new MailcowSdkJs.EditFail2BanRequest() // EditFail2BanRequest | 
};
apiInstance.editFail2Ban(opts, (error, data, response) => {
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
 **editFail2BanRequest** | [**EditFail2BanRequest**](EditFail2BanRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, */*


## getFail2BanConfig

> getFail2BanConfig()

Get Fail2Ban Config

Gets the current Fail2Ban configuration.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.Fail2BanApi();
apiInstance.getFail2BanConfig((error, data, response) => {
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

