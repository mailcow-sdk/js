# MailcowSdkJs.SingleSignOnApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueDomainAdminSSOToken**](SingleSignOnApi.md#issueDomainAdminSSOToken) | **POST** /api/v1/add/sso/domain-admin | Issue Domain Admin SSO token



## issueDomainAdminSSOToken

> issueDomainAdminSSOToken(opts)

Issue Domain Admin SSO token

Using this endpoint you can issue a token for Domain Admin user. This token can be used for autologin Domain Admin user by using query_string var sso_token&#x3D;{token}. Token expiration time is 30s

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.SingleSignOnApi();
let opts = {
  'issueDomainAdminSSOTokenRequest': new MailcowSdkJs.IssueDomainAdminSSOTokenRequest() // IssueDomainAdminSSOTokenRequest | 
};
apiInstance.issueDomainAdminSSOToken(opts, (error, data, response) => {
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
 **issueDomainAdminSSOTokenRequest** | [**IssueDomainAdminSSOTokenRequest**](IssueDomainAdminSSOTokenRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

