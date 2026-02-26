# MailcowSdkJs.DomainAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomainAdminUser**](DomainAdminApi.md#createDomainAdminUser) | **POST** /api/v1/add/domain-admin | Create Domain Admin user
[**deleteDomainAdmin**](DomainAdminApi.md#deleteDomainAdmin) | **POST** /api/v1/delete/domain-admin | Delete Domain Admin
[**editDomainAdminACL**](DomainAdminApi.md#editDomainAdminACL) | **POST** /api/v1/edit/da-acl | Edit Domain Admin ACL
[**editDomainAdminUser**](DomainAdminApi.md#editDomainAdminUser) | **POST** /api/v1/edit/domain-admin | Edit Domain Admin user
[**getDomainAdmins**](DomainAdminApi.md#getDomainAdmins) | **GET** /api/v1/get/domain-admin/all | Get Domain Admins



## createDomainAdminUser

> CreateAlias200Response createDomainAdminUser(opts)

Create Domain Admin user

Using this endpoint you can create a new Domain Admin user. This user has full control over a domain, and can create new mailboxes and aliases.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAdminApi();
let opts = {
  'createDomainAdminUserRequest': new MailcowSdkJs.CreateDomainAdminUserRequest() // CreateDomainAdminUserRequest | 
};
apiInstance.createDomainAdminUser(opts, (error, data, response) => {
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
 **createDomainAdminUserRequest** | [**CreateDomainAdminUserRequest**](CreateDomainAdminUserRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDomainAdmin

> CreateAlias200Response deleteDomainAdmin(opts)

Delete Domain Admin

Using this endpoint a existing Domain Admin user can be deleted.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAdminApi();
let opts = {
  'deleteDomainAdminRequest': new MailcowSdkJs.DeleteDomainAdminRequest() // DeleteDomainAdminRequest | 
};
apiInstance.deleteDomainAdmin(opts, (error, data, response) => {
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
 **deleteDomainAdminRequest** | [**DeleteDomainAdminRequest**](DeleteDomainAdminRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editDomainAdminACL

> CreateAlias200Response editDomainAdminACL(opts)

Edit Domain Admin ACL

Using this endpoint you can edit the ACLs of a Domain Admin user. This user has full control over a domain, and can create new mailboxes and aliases.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAdminApi();
let opts = {
  'editDomainAdminACLRequest': new MailcowSdkJs.EditDomainAdminACLRequest() // EditDomainAdminACLRequest | 
};
apiInstance.editDomainAdminACL(opts, (error, data, response) => {
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
 **editDomainAdminACLRequest** | [**EditDomainAdminACLRequest**](EditDomainAdminACLRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editDomainAdminUser

> CreateAlias200Response editDomainAdminUser(opts)

Edit Domain Admin user

Using this endpoint you can edit a existing Domain Admin user. This user has full control over a domain, and can create new mailboxes and aliases.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAdminApi();
let opts = {
  'editDomainAdminUserRequest': new MailcowSdkJs.EditDomainAdminUserRequest() // EditDomainAdminUserRequest | 
};
apiInstance.editDomainAdminUser(opts, (error, data, response) => {
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
 **editDomainAdminUserRequest** | [**EditDomainAdminUserRequest**](EditDomainAdminUserRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDomainAdmins

> getDomainAdmins()

Get Domain Admins



### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.DomainAdminApi();
apiInstance.getDomainAdmins((error, data, response) => {
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

