# MailcowSdkJs.DomainAntispamPoliciesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomainPolicy**](DomainAntispamPoliciesApi.md#createDomainPolicy) | **POST** /api/v1/add/domain-policy | Create domain policy
[**deleteDomainPolicy**](DomainAntispamPoliciesApi.md#deleteDomainPolicy) | **POST** /api/v1/delete/domain-policy | Delete domain policy
[**listBlacklistDomainPolicy**](DomainAntispamPoliciesApi.md#listBlacklistDomainPolicy) | **GET** /api/v1/get/policy_bl_domain/{domain} | List blacklist domain policy
[**listWhitelistDomainPolicy**](DomainAntispamPoliciesApi.md#listWhitelistDomainPolicy) | **GET** /api/v1/get/policy_wl_domain/{domain} | List whitelist domain policy



## createDomainPolicy

> CreateAlias200Response createDomainPolicy(opts)

Create domain policy

You may create your own domain policy using this action. It takes a JSON object containing a domain informations.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAntispamPoliciesApi();
let opts = {
  'createDomainPolicyRequest': new MailcowSdkJs.CreateDomainPolicyRequest() // CreateDomainPolicyRequest | 
};
apiInstance.createDomainPolicy(opts, (error, data, response) => {
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
 **createDomainPolicyRequest** | [**CreateDomainPolicyRequest**](CreateDomainPolicyRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDomainPolicy

> CreateAlias200Response deleteDomainPolicy(opts)

Delete domain policy

You can delete one o more domain policies.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAntispamPoliciesApi();
let opts = {
  'deleteDomainPolicyRequest': new MailcowSdkJs.DeleteDomainPolicyRequest() // DeleteDomainPolicyRequest | 
};
apiInstance.deleteDomainPolicy(opts, (error, data, response) => {
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
 **deleteDomainPolicyRequest** | [**DeleteDomainPolicyRequest**](DeleteDomainPolicyRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listBlacklistDomainPolicy

> listBlacklistDomainPolicy(domain, opts)

List blacklist domain policy

You can list all blacklist policies per domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAntispamPoliciesApi();
let domain = "domain_example"; // String | name of domain
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.listBlacklistDomainPolicy(domain, opts, (error, data, response) => {
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


## listWhitelistDomainPolicy

> listWhitelistDomainPolicy(domain, opts)

List whitelist domain policy

You can list all whitelist policies per domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAntispamPoliciesApi();
let domain = "domain_example"; // String | name of domain
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.listWhitelistDomainPolicy(domain, opts, (error, data, response) => {
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

