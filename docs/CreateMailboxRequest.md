# MailcowSdkJs.CreateMailboxRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | is mailbox active or not | [optional] 
**domain** | **String** | domain name | [optional] 
**localPart** | **String** | left part of email address | [optional] 
**name** | **String** | Full name of the mailbox user | [optional] 
**authsource** | **String** | Specifies the authentication source for the mailbox. | [optional] [default to &#39;mailcow&#39;]
**password2** | **String** | mailbox password for confirmation | [optional] 
**password** | **String** | mailbox password when using &#x60;mailcow&#x60; as the authentication source. | [optional] 
**quota** | **Number** | mailbox quota | [optional] 
**forcePwUpdate** | **Boolean** | forces the user to update its password on first login | [optional] 
**tlsEnforceIn** | **Boolean** | force inbound email tls encryption | [optional] 
**tlsEnforceOut** | **Boolean** | force oubound tmail tls encryption | [optional] 



## Enum: AuthsourceEnum


* `mailcow` (value: `"mailcow"`)

* `ldap` (value: `"ldap"`)

* `keycloak` (value: `"keycloak"`)

* `generic-oidc` (value: `"generic-oidc"`)




