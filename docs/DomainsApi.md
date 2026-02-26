# MailcowSdkJs.DomainsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomain**](DomainsApi.md#createDomain) | **POST** /api/v1/add/domain | Create domain
[**deleteDomain**](DomainsApi.md#deleteDomain) | **POST** /api/v1/delete/domain | Delete domain
[**deleteDomainTags**](DomainsApi.md#deleteDomainTags) | **POST** /api/v1/delete/domain/tag/{domain} | Delete domain tags
[**getDomains**](DomainsApi.md#getDomains) | **GET** /api/v1/get/domain/{id} | Get domains
[**updateDomain**](DomainsApi.md#updateDomain) | **POST** /api/v1/edit/domain | Update domain
[**updateDomainWideFooter**](DomainsApi.md#updateDomainWideFooter) | **POST** /api/v1/edit/domain/footer | Update domain wide footer



## createDomain

> [CreateAlias200Response] createDomain(opts)

Create domain

You may create your own domain using this action. It takes a JSON object containing a domain informations.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainsApi();
let opts = {
  'createDomainRequest': new MailcowSdkJs.CreateDomainRequest() // CreateDomainRequest | 
};
apiInstance.createDomain(opts, (error, data, response) => {
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
 **createDomainRequest** | [**CreateDomainRequest**](CreateDomainRequest.md)|  | [optional] 

### Return type

[**[CreateAlias200Response]**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDomain

> [CreateAlias200Response] deleteDomain(opts)

Delete domain

You can delete one or more domains.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainsApi();
let opts = {
  'deleteDomainRequest': new MailcowSdkJs.DeleteDomainRequest() // DeleteDomainRequest | 
};
apiInstance.deleteDomain(opts, (error, data, response) => {
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
 **deleteDomainRequest** | [**DeleteDomainRequest**](DeleteDomainRequest.md)|  | [optional] 

### Return type

[**[CreateAlias200Response]**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDomainTags

> CreateAlias200Response deleteDomainTags(domain, opts)

Delete domain tags

You can delete one or more domain tags.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainsApi();
let domain = "domain.tld"; // String | name of domain
let opts = {
  'deleteDomainTagsRequest': new MailcowSdkJs.DeleteDomainTagsRequest() // DeleteDomainTagsRequest | 
};
apiInstance.deleteDomainTags(domain, opts, (error, data, response) => {
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
 **domain** | **String**| name of domain | 
 **deleteDomainTagsRequest** | [**DeleteDomainTagsRequest**](DeleteDomainTagsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDomains

> getDomains(id, opts)

Get domains

You can list all domains existing in system.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainsApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'tags': "tag1,tag2", // String | comma seperated list of tags to filter by
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getDomains(id, opts, (error, data, response) => {
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
 **tags** | **String**| comma seperated list of tags to filter by | [optional] 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDomain

> [CreateAlias200Response] updateDomain(opts)

Update domain

You can update one or more domains per request. You can also send just attributes you want to change. Example: You can add domain names to items list and in attr object just include &#x60;\&quot;active\&quot;: \&quot;0\&quot;&#x60; to deactivate domains.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainsApi();
let opts = {
  'updateDomainRequest': new MailcowSdkJs.UpdateDomainRequest() // UpdateDomainRequest | 
};
apiInstance.updateDomain(opts, (error, data, response) => {
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
 **updateDomainRequest** | [**UpdateDomainRequest**](UpdateDomainRequest.md)|  | [optional] 

### Return type

[**[CreateAlias200Response]**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDomainWideFooter

> CreateAlias200Response updateDomainWideFooter(opts)

Update domain wide footer

You can update the footer of one or more domains per request.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainsApi();
let opts = {
  'updateDomainWideFooterRequest': new MailcowSdkJs.UpdateDomainWideFooterRequest() // UpdateDomainWideFooterRequest | 
};
apiInstance.updateDomainWideFooter(opts, (error, data, response) => {
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
 **updateDomainWideFooterRequest** | [**UpdateDomainWideFooterRequest**](UpdateDomainWideFooterRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

