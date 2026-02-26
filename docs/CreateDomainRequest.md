# MailcowSdkJs.CreateDomainRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | is domain active or not | [optional] 
**aliases** | **Number** | limit count of aliases associated with this domain | [optional] 
**backupmx** | **Boolean** | relay domain or not | [optional] 
**defquota** | **Number** | predefined mailbox quota in &#x60;add mailbox&#x60; form | [optional] 
**description** | **String** | Description of domain | [optional] 
**domain** | **String** | Fully qualified domain name | [optional] 
**gal** | **Boolean** | is domain global address list active or not, it enables shared contacts accross domain in SOGo webmail | [optional] 
**mailboxes** | **Number** | limit count of mailboxes associated with this domain | [optional] 
**maxquota** | **Number** | maximum quota per mailbox | [optional] 
**quota** | **Number** | maximum quota for this domain (for all mailboxes in sum) | [optional] 
**restartSogo** | **Number** | restart SOGo to activate the domain in SOGo | [optional] 
**relayAllRecipients** | **Boolean** | if not, them you have to create \&quot;dummy\&quot; mailbox for each address to relay | [optional] 
**relayUnknownOnly** | **Boolean** | Relay non-existing mailboxes only. Existing mailboxes will be delivered locally. | [optional] 
**rlFrame** | **String** |  | [optional] 
**rlValue** | **Number** | rate limit value | [optional] 
**tags** | **[String]** | tags for this Domain | [optional] 



## Enum: RlFrameEnum


* `s` (value: `"s"`)

* `m` (value: `"m"`)

* `h` (value: `"h"`)

* `d` (value: `"d"`)




