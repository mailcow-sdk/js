# MailcowSdkJs.RoutingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSenderDependentTransports**](RoutingApi.md#createSenderDependentTransports) | **POST** /api/v1/add/relayhost | Create Sender-Dependent Transports
[**createTransportMaps**](RoutingApi.md#createTransportMaps) | **POST** /api/v1/add/transport | Create Transport Maps
[**deleteSenderDependentTransports**](RoutingApi.md#deleteSenderDependentTransports) | **POST** /api/v1/delete/relayhost | Delete Sender-Dependent Transports
[**deleteTransportMaps**](RoutingApi.md#deleteTransportMaps) | **POST** /api/v1/delete/transport | Delete Transport Maps
[**getSenderDependentTransports**](RoutingApi.md#getSenderDependentTransports) | **GET** /api/v1/get/relayhost/{id} | Get Sender-Dependent Transports
[**getTransportMaps**](RoutingApi.md#getTransportMaps) | **GET** /api/v1/get/transport/{id} | Get Transport Maps



## createSenderDependentTransports

> CreateAlias200Response createSenderDependentTransports(opts)

Create Sender-Dependent Transports

Using this endpoint you can create Sender-Dependent Transports.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RoutingApi();
let opts = {
  'createSenderDependentTransportsRequest': new MailcowSdkJs.CreateSenderDependentTransportsRequest() // CreateSenderDependentTransportsRequest | 
};
apiInstance.createSenderDependentTransports(opts, (error, data, response) => {
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
 **createSenderDependentTransportsRequest** | [**CreateSenderDependentTransportsRequest**](CreateSenderDependentTransportsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTransportMaps

> CreateAlias200Response createTransportMaps(opts)

Create Transport Maps

Using this endpoint you can create Sender-Dependent Transports.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RoutingApi();
let opts = {
  'createTransportMapsRequest': new MailcowSdkJs.CreateTransportMapsRequest() // CreateTransportMapsRequest | 
};
apiInstance.createTransportMaps(opts, (error, data, response) => {
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
 **createTransportMapsRequest** | [**CreateTransportMapsRequest**](CreateTransportMapsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSenderDependentTransports

> CreateAlias200Response deleteSenderDependentTransports(opts)

Delete Sender-Dependent Transports

Using this endpoint you can delete a Sender-Dependent Transport, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RoutingApi();
let opts = {
  'deleteSenderDependentTransportsRequest': new MailcowSdkJs.DeleteSenderDependentTransportsRequest() // DeleteSenderDependentTransportsRequest | 
};
apiInstance.deleteSenderDependentTransports(opts, (error, data, response) => {
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
 **deleteSenderDependentTransportsRequest** | [**DeleteSenderDependentTransportsRequest**](DeleteSenderDependentTransportsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTransportMaps

> CreateAlias200Response deleteTransportMaps(opts)

Delete Transport Maps

Using this endpoint you can delete a Transport Maps, for this you have to know its ID. You can get the ID using the GET method.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RoutingApi();
let opts = {
  'deleteTransportMapsRequest': new MailcowSdkJs.DeleteTransportMapsRequest() // DeleteTransportMapsRequest | 
};
apiInstance.deleteTransportMaps(opts, (error, data, response) => {
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
 **deleteTransportMapsRequest** | [**DeleteTransportMapsRequest**](DeleteTransportMapsRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSenderDependentTransports

> getSenderDependentTransports(id, opts)

Get Sender-Dependent Transports

Using this endpoint you can get all Sender-Dependent Transports.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RoutingApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getSenderDependentTransports(id, opts, (error, data, response) => {
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
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransportMaps

> getTransportMaps(id, opts)

Get Transport Maps

Using this endpoint you can get all Transport Maps.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.RoutingApi();
let id = "all"; // String | id of entry you want to get
let opts = {
  'xAPIKey': "api-key-string" // String | e.g. api-key-string
};
apiInstance.getTransportMaps(id, opts, (error, data, response) => {
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
 **xAPIKey** | **String**| e.g. api-key-string | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

