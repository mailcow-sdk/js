# MailcowSdkJs.RatelimitsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editDomainRatelimits**](RatelimitsApi.md#editDomainRatelimits) | **POST** /api/v1/edit/rl-domain/ | Edit domain ratelimits
[**editMailboxRatelimits**](RatelimitsApi.md#editMailboxRatelimits) | **POST** /api/v1/edit/rl-mbox/ | Edit mailbox ratelimits
[**getDomainRatelimits**](RatelimitsApi.md#getDomainRatelimits) | **GET** /api/v1/get/rl-domain/{domain} | Get domain ratelimits
[**getMailboxRatelimits**](RatelimitsApi.md#getMailboxRatelimits) | **GET** /api/v1/get/rl-mbox/{mailbox} | Get mailbox ratelimits



## editDomainRatelimits

> CreateAlias200Response editDomainRatelimits(opts)

Edit domain ratelimits

Using this endpoint you can edit the ratelimits for a certain domains.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RatelimitsApi();
let opts = {
  'editDomainRatelimitsRequest': new MailcowSdkJs.EditDomainRatelimitsRequest() // EditDomainRatelimitsRequest | 
};
apiInstance.editDomainRatelimits(opts, (error, data, response) => {
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
 **editDomainRatelimitsRequest** | [**EditDomainRatelimitsRequest**](EditDomainRatelimitsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editMailboxRatelimits

> CreateAlias200Response editMailboxRatelimits(opts)

Edit mailbox ratelimits

Using this endpoint you can edit the ratelimits for a certain mailbox.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RatelimitsApi();
let opts = {
  'editMailboxRatelimitsRequest': new MailcowSdkJs.EditMailboxRatelimitsRequest() // EditMailboxRatelimitsRequest | 
};
apiInstance.editMailboxRatelimits(opts, (error, data, response) => {
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
 **editMailboxRatelimitsRequest** | [**EditMailboxRatelimitsRequest**](EditMailboxRatelimitsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDomainRatelimits

> getDomainRatelimits(domain, opts)

Get domain ratelimits

Using this endpoint you can get the ratelimits for a certain domains. You can use all for all domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RatelimitsApi();
let domain = "domain_example"; // String | name of domain or all
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getDomainRatelimits(domain, opts, (error, data, response) => {
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
 **domain** | **String**| name of domain or all | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailboxRatelimits

> getMailboxRatelimits(mailbox, opts)

Get mailbox ratelimits

Using this endpoint you can get the ratelimits for a certain mailbox. You can use all for all mailboxes.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RatelimitsApi();
let mailbox = "mailbox_example"; // String | name of mailbox or all
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getMailboxRatelimits(mailbox, opts, (error, data, response) => {
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
 **mailbox** | **String**| name of mailbox or all | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

