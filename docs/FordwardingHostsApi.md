# MailcowSdkJs.FordwardingHostsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addForwardHost**](FordwardingHostsApi.md#addForwardHost) | **POST** /api/v1/add/fwdhost | Add Forward Host
[**deleteForwardHost**](FordwardingHostsApi.md#deleteForwardHost) | **POST** /api/v1/delete/fwdhost | Delete Forward Host
[**getForwardingHosts**](FordwardingHostsApi.md#getForwardingHosts) | **GET** /api/v1/get/fwdhost/all | Get Forwarding Hosts



## addForwardHost

> CreateAlias200Response addForwardHost(opts)

Add Forward Host

Add a new Forwarding host to mailcow. You can chose to enable or disable spam filtering of incoming emails by specifing &#x60;filter_spam&#x60; 0 &#x3D; inactive, 1 &#x3D; active.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.FordwardingHostsApi();
let opts = {
  'addForwardHostRequest': new MailcowSdkJs.AddForwardHostRequest() // AddForwardHostRequest | 
};
apiInstance.addForwardHost(opts, (error, data, response) => {
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
 **addForwardHostRequest** | [**AddForwardHostRequest**](AddForwardHostRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteForwardHost

> CreateAlias200Response deleteForwardHost(opts)

Delete Forward Host

Using this endpoint you can delete a forwarding host, in order to do so you need to know the IP of the host.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.FordwardingHostsApi();
let opts = {
  'deleteForwardHostRequest': new MailcowSdkJs.DeleteForwardHostRequest() // DeleteForwardHostRequest | 
};
apiInstance.deleteForwardHost(opts, (error, data, response) => {
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
 **deleteForwardHostRequest** | [**DeleteForwardHostRequest**](DeleteForwardHostRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getForwardingHosts

> getForwardingHosts()

Get Forwarding Hosts

You can list all Forwarding Hosts in your mailcow.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.FordwardingHostsApi();
apiInstance.getForwardingHosts((error, data, response) => {
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

