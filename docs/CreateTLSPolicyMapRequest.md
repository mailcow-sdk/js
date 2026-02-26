# MailcowSdkJs.CreateTLSPolicyMapRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **String** | custom parameters you find out more about them [here](http://www.postfix.org/postconf.5.html#smtp_tls_policy_maps) | [optional] 
**active** | **Number** | 1 for a active user account 0 for a disabled user account | [optional] 
**dest** | **String** | the target domain or email address | [optional] 
**policy** | **String** | the policy | [optional] 



## Enum: PolicyEnum


* `none` (value: `"none"`)

* `may` (value: `"may"`)

* `encrypt` (value: `"encrypt"`)

* `dane` (value: `"dane"`)

* `&#39;dane` (value: `"'dane"`)

* `fingerprint` (value: `"fingerprint"`)

* `verify` (value: `"verify"`)

* `secure` (value: `"secure"`)




