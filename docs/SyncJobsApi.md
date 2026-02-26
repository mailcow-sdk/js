# MailcowSdkJs.SyncJobsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSyncJob**](SyncJobsApi.md#createSyncJob) | **POST** /api/v1/add/syncjob | Create sync job
[**deleteSyncJob**](SyncJobsApi.md#deleteSyncJob) | **POST** /api/v1/delete/syncjob | Delete sync job
[**getSyncJobs**](SyncJobsApi.md#getSyncJobs) | **GET** /api/v1/get/syncjobs/all/no_log | Get sync jobs
[**updateSyncJob**](SyncJobsApi.md#updateSyncJob) | **POST** /api/v1/edit/syncjob | Update sync job



## createSyncJob

> CreateAlias200Response createSyncJob(opts)

Create sync job

You can create new sync job using this action. It takes a JSON object containing a domain informations.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.SyncJobsApi();
let opts = {
  'createSyncJobRequest': new MailcowSdkJs.CreateSyncJobRequest() // CreateSyncJobRequest | 
};
apiInstance.createSyncJob(opts, (error, data, response) => {
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
 **createSyncJobRequest** | [**CreateSyncJobRequest**](CreateSyncJobRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSyncJob

> CreateAlias200Response deleteSyncJob(opts)

Delete sync job

You can delete one or more sync jobs.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.SyncJobsApi();
let opts = {
  'deleteSyncJobRequest': new MailcowSdkJs.DeleteSyncJobRequest() // DeleteSyncJobRequest | 
};
apiInstance.deleteSyncJob(opts, (error, data, response) => {
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
 **deleteSyncJobRequest** | [**DeleteSyncJobRequest**](DeleteSyncJobRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSyncJobs

> getSyncJobs()

Get sync jobs

You can list all syn jobs existing in system.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.SyncJobsApi();
apiInstance.getSyncJobs((error, data, response) => {
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


## updateSyncJob

> CreateAlias200Response updateSyncJob(opts)

Update sync job

You can update one or more sync jobs per request. You can also send just attributes you want to change.

### Example

```javascript
import MailcowSdkJs from 'mailcow-sdk-js';
let defaultClient = MailcowSdkJs.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailcowSdkJs.SyncJobsApi();
let opts = {
  'updateSyncJobRequest': new MailcowSdkJs.UpdateSyncJobRequest() // UpdateSyncJobRequest | 
};
apiInstance.updateSyncJob(opts, (error, data, response) => {
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
 **updateSyncJobRequest** | [**UpdateSyncJobRequest**](UpdateSyncJobRequest.md)|  | [optional] 

### Return type

[**CreateAlias200Response**](CreateAlias200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

