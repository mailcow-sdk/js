# MailcowSdkJs.EditFail2BanRequestAttr

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backlist** | **String** | the backlisted ips or hostnames separated by comma | [optional] 
**banTime** | **Number** | the time an ip should be banned | [optional] 
**banTimeIncrement** | **Boolean** | if the time of the ban should increase each time | [optional] 
**maxAttempts** | **Number** | the maximum numbe of wrong logins before a ip is banned | [optional] 
**maxBanTime** | **Number** | the maximum time an ip should be banned | [optional] 
**netbanIpv4** | **Number** | the networks mask to ban for ipv4 | [optional] 
**netbanIpv6** | **Number** | the networks mask to ban for ipv6 | [optional] 
**retryWindow** | **Number** | the maximum time in which a ip as to login with false credentials to be banned | [optional] 
**whitelist** | **String** | whitelisted ips or hostnames sepereated by comma | [optional] 


