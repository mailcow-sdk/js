# MailcowSdkJs.CrossOriginResourceSharingCORSApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editCrossOriginResourceSharingCORSSettings**](CrossOriginResourceSharingCORSApi.md#editCrossOriginResourceSharingCORSSettings) | **POST** /api/v1/edit/cors | Edit Cross-Origin Resource Sharing (CORS) settings



## editCrossOriginResourceSharingCORSSettings

> editCrossOriginResourceSharingCORSSettings(opts)

Edit Cross-Origin Resource Sharing (CORS) settings

This endpoint allows you to manage Cross-Origin Resource Sharing (CORS) settings for the API. CORS is a security feature implemented by web browsers to prevent unauthorized cross-origin requests. By editing the CORS settings, you can specify which domains and which methods are permitted to access the API resources from outside the mailcow domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.CrossOriginResourceSharingCORSApi();
let opts = {
  'editCrossOriginResourceSharingCORSSettingsRequest': new MailcowSdkJs.EditCrossOriginResourceSharingCORSSettingsRequest() // EditCrossOriginResourceSharingCORSSettingsRequest | 
};
apiInstance.editCrossOriginResourceSharingCORSSettings(opts, (error, data, response) => {
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
 **editCrossOriginResourceSharingCORSSettingsRequest** | [**EditCrossOriginResourceSharingCORSSettingsRequest**](EditCrossOriginResourceSharingCORSSettingsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

