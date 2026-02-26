# MailcowSdkJs.UpdateMailboxRequestAttr

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | is mailbox active or not | [optional] 
**forcePwUpdate** | **Boolean** | force user to change password on next login | [optional] 
**name** | **String** | Full name of the mailbox user | [optional] 
**authsource** | **String** | Specifies the authentication source for the mailbox. | [optional] 
**password2** | **String** | new mailbox password for confirmation | [optional] 
**password** | **String** | new mailbox password when using &#x60;mailcow&#x60; as the authentication source. | [optional] 
**quota** | **Number** | mailbox quota | [optional] 
**senderAcl** | **Object** | list of allowed send from addresses | [optional] 
**sogoAccess** | **Boolean** | is access to SOGo webmail active or not | [optional] 



## Enum: AuthsourceEnum


* `mailcow` (value: `"mailcow"`)

* `ldap` (value: `"ldap"`)

* `keycloak` (value: `"keycloak"`)

* `generic-oidc` (value: `"generic-oidc"`)




