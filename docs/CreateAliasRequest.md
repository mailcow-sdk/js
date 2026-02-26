# MailcowSdkJs.CreateAliasRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | is alias active or not | [optional] 
**address** | **String** | alias address, for catchall use \&quot;@domain.tld\&quot; | [optional] 
**_goto** | **String** | destination address, comma separated | [optional] 
**gotoHam** | **Boolean** | learn as ham | [optional] 
**gotoNull** | **Boolean** | silently ignore | [optional] 
**gotoSpam** | **Boolean** | learn as spam | [optional] 
**sogoVisible** | **Boolean** | toggle visibility as selectable sender in SOGo | [optional] 


