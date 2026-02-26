# MailcowSdkJs.MailboxesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMailbox**](MailboxesApi.md#createMailbox) | **POST** /api/v1/add/mailbox | Create mailbox
[**deleteMailbox**](MailboxesApi.md#deleteMailbox) | **POST** /api/v1/delete/mailbox | Delete mailbox
[**deleteMailboxTags**](MailboxesApi.md#deleteMailboxTags) | **POST** /api/v1/delete/mailbox/tag/{mailbox} | Delete mailbox tags
[**editMailboxSpamFilterScore**](MailboxesApi.md#editMailboxSpamFilterScore) | **POST** /api/v1/edit/spam-score/ | Edit mailbox spam filter score
[**getMailboxOrGlobalSpamFilterScore**](MailboxesApi.md#getMailboxOrGlobalSpamFilterScore) | **GET** /api/v1/get/spam-score/{mailbox} | Get mailbox or global spam filter score
[**getMailboxes**](MailboxesApi.md#getMailboxes) | **GET** /api/v1/get/mailbox/{id} | Get mailboxes
[**getMailboxesOfADomain**](MailboxesApi.md#getMailboxesOfADomain) | **GET** /api/v1/get/mailbox/all/{domain} | Get mailboxes of a domain
[**quarantineNotifications**](MailboxesApi.md#quarantineNotifications) | **POST** /api/v1/edit/quarantine_notification | Quarantine Notifications
[**updateMailbox**](MailboxesApi.md#updateMailbox) | **POST** /api/v1/edit/mailbox | Update mailbox
[**updateMailboxACL**](MailboxesApi.md#updateMailboxACL) | **POST** /api/v1/edit/user-acl | Update mailbox ACL
[**updateMailboxCustomAttributes**](MailboxesApi.md#updateMailboxCustomAttributes) | **POST** /api/v1/edit/mailbox/custom-attribute | Update mailbox custom attributes
[**updatePushoverSettings**](MailboxesApi.md#updatePushoverSettings) | **POST** /api/v1/edit/pushover | Update Pushover settings



## createMailbox

> CreateAlias200Response createMailbox(opts)

Create mailbox

You may create your own mailbox using this action. It takes a JSON object containing a domain informations.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'createMailboxRequest': new MailcowSdkJs.CreateMailboxRequest() // CreateMailboxRequest | 
};
apiInstance.createMailbox(opts, (error, data, response) => {
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
 **createMailboxRequest** | [**CreateMailboxRequest**](CreateMailboxRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMailbox

> CreateAlias200Response deleteMailbox(opts)

Delete mailbox

You can delete one or more mailboxes.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'deleteMailboxRequest': new MailcowSdkJs.DeleteMailboxRequest() // DeleteMailboxRequest | 
};
apiInstance.deleteMailbox(opts, (error, data, response) => {
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
 **deleteMailboxRequest** | [**DeleteMailboxRequest**](DeleteMailboxRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMailboxTags

> CreateAlias200Response deleteMailboxTags(mailbox, opts)

Delete mailbox tags

You can delete one or more mailbox tags.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let mailbox = "info@domain.tld"; // String | name of mailbox
let opts = {
  'deleteMailboxTagsRequest': new MailcowSdkJs.DeleteMailboxTagsRequest() // DeleteMailboxTagsRequest | 
};
apiInstance.deleteMailboxTags(mailbox, opts, (error, data, response) => {
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
 **mailbox** | **String**| name of mailbox | 
 **deleteMailboxTagsRequest** | [**DeleteMailboxTagsRequest**](DeleteMailboxTagsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editMailboxSpamFilterScore

> CreateAlias200Response editMailboxSpamFilterScore(opts)

Edit mailbox spam filter score

Using this endpoint you can edit the spam filter score for a certain mailbox.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'body': null // Object | 
};
apiInstance.editMailboxSpamFilterScore(opts, (error, data, response) => {
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
 **body** | **Object**|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMailboxOrGlobalSpamFilterScore

> getMailboxOrGlobalSpamFilterScore(mailbox, opts)

Get mailbox or global spam filter score

Using this endpoint you can get the global spam filter score or the spam filter score of a certain mailbox.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let mailbox = "mailbox_example"; // String | name of mailbox or empty for current user - admin user will retrieve the global spam filter score
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getMailboxOrGlobalSpamFilterScore(mailbox, opts, (error, data, response) => {
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
 **mailbox** | **String**| name of mailbox or empty for current user - admin user will retrieve the global spam filter score | 
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailboxes

> getMailboxes(id, opts)

Get mailboxes

You can list all mailboxes existing in system.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'tags': "tag1,tag2", // String | comma seperated list of tags to filter by
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getMailboxes(id, opts, (error, data, response) => {
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


## getMailboxesOfADomain

> getMailboxesOfADomain(domain, opts)

Get mailboxes of a domain

You can list all mailboxes existing in system for a specific domain.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let domain = "domain_example"; // String | name of domain
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getMailboxesOfADomain(domain, opts, (error, data, response) => {
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


## quarantineNotifications

> quarantineNotifications(opts)

Quarantine Notifications

You can update one or more mailboxes per request.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'quarantineNotificationsRequest': new MailcowSdkJs.QuarantineNotificationsRequest() // QuarantineNotificationsRequest | 
};
apiInstance.quarantineNotifications(opts, (error, data, response) => {
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
 **quarantineNotificationsRequest** | [**QuarantineNotificationsRequest**](QuarantineNotificationsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMailbox

> CreateAlias200Response updateMailbox(opts)

Update mailbox

You can update one or more mailboxes per request. You can also send just attributes you want to change

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'updateMailboxRequest': new MailcowSdkJs.UpdateMailboxRequest() // UpdateMailboxRequest | 
};
apiInstance.updateMailbox(opts, (error, data, response) => {
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
 **updateMailboxRequest** | [**UpdateMailboxRequest**](UpdateMailboxRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMailboxACL

> CreateAlias200Response updateMailboxACL(opts)

Update mailbox ACL

Using this endpoints its possible to update the ACL&#39;s for mailboxes

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'updateMailboxACLRequest': new MailcowSdkJs.UpdateMailboxACLRequest() // UpdateMailboxACLRequest | 
};
apiInstance.updateMailboxACL(opts, (error, data, response) => {
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
 **updateMailboxACLRequest** | [**UpdateMailboxACLRequest**](UpdateMailboxACLRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMailboxCustomAttributes

> CreateAlias200Response updateMailboxCustomAttributes(opts)

Update mailbox custom attributes

You can update custom attributes of one or more mailboxes per request.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'updateMailboxCustomAttributesRequest': new MailcowSdkJs.UpdateMailboxCustomAttributesRequest() // UpdateMailboxCustomAttributesRequest | 
};
apiInstance.updateMailboxCustomAttributes(opts, (error, data, response) => {
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
 **updateMailboxCustomAttributesRequest** | [**UpdateMailboxCustomAttributesRequest**](UpdateMailboxCustomAttributesRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushoverSettings

> CreateAlias200Response updatePushoverSettings(opts)

Update Pushover settings

Using this endpoint it is possible to update the pushover settings for mailboxes

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.MailboxesApi();
let opts = {
  'updatePushoverSettingsRequest': new MailcowSdkJs.UpdatePushoverSettingsRequest() // UpdatePushoverSettingsRequest | 
};
apiInstance.updatePushoverSettings(opts, (error, data, response) => {
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
 **updatePushoverSettingsRequest** | [**UpdatePushoverSettingsRequest**](UpdatePushoverSettingsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

