# MailcowSdkJs.IdentityProviderApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editExternalIdentityProviderSettings**](IdentityProviderApi.md#editExternalIdentityProviderSettings) | **POST** /api/v1/edit/identity-provider | Edit external Identity Provider



## editExternalIdentityProviderSettings

> editExternalIdentityProviderSettings(opts)

Edit external Identity Provider

Configure an external Identity Provider to use as user authentication

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.IdentityProviderApi();
let opts = {
  'editExternalIdentityProviderSettingsRequest': {"items":["identity-provider"],"attr":{"authsource":"keycloak","server_url":"https://auth.mailcow.tld","realm":"mailcow","client_id":"mailcow_client","client_secret":"Xy7GdPqvJ9m3R8sT2LkVZ5W1oNbCaYQf","redirect_url":"https://mail.mailcow.tld","redirect_url_extra":["https://extramail.mailcow.tld"],"version":"26.1.3","default_template":"Default","mappers":["small_mbox","medium_mbox"],"templates":["small","medium"],"ignore_ssl_error":true,"mailpassword_flow":true,"periodic_sync":true,"import_users":true,"sync_interval":30}} // EditExternalIdentityProviderSettingsRequest | 
};
apiInstance.editExternalIdentityProviderSettings(opts, (error, data, response) => {
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
 **editExternalIdentityProviderSettingsRequest** | [**EditExternalIdentityProviderSettingsRequest**](EditExternalIdentityProviderSettingsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

