# MailcowSdkJs.QuarantineApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMailsInQuarantine**](QuarantineApi.md#deleteMailsInQuarantine) | **POST** /api/v1/delete/qitem | Delete mails in Quarantine
[**getMailsInQuarantine**](QuarantineApi.md#getMailsInQuarantine) | **GET** /api/v1/get/quarantine/all | Get mails in Quarantine



## deleteMailsInQuarantine

> CreateAlias200Response deleteMailsInQuarantine(opts)

Delete mails in Quarantine

Using this endpoint you can delete a email from quarantine, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.QuarantineApi();
let opts = {
  'deleteMailsInQuarantineRequest': new MailcowSdkJs.DeleteMailsInQuarantineRequest() // DeleteMailsInQuarantineRequest | 
};
apiInstance.deleteMailsInQuarantine(opts, (error, data, response) => {
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
 **deleteMailsInQuarantineRequest** | [**DeleteMailsInQuarantineRequest**](DeleteMailsInQuarantineRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMailsInQuarantine

> getMailsInQuarantine()

Get mails in Quarantine

Get all mails that are currently in Quarantine.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.QuarantineApi();
apiInstance.getMailsInQuarantine((error, data, response) => {
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

