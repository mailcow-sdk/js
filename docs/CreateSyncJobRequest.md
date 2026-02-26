# MailcowSdkJs.CreateSyncJobRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **String** | your local mailcow mailbox | [optional] 
**host1** | **String** | the smtp server where mails should be synced from | [optional] 
**port1** | **String** | the smtp port of the target mail server | [optional] 
**user1** | **String** | the username of the mailbox | [optional] 
**password** | **String** | the password of the mailbox | [optional] 
**enc1** | **String** | the encryption method used to connect to the mailserver | [optional] 
**minsInternal** | **Number** | the interval in which messages should be syned | [optional] 
**subfolder2** | **String** | sync into subfolder on destination (empty &#x3D; do not use subfolder) | [optional] 
**maxage** | **Number** | only sync messages up to this age in days | [optional] 
**maxbytespersecond** | **Number** | max speed transfer limit for the sync | [optional] 
**timeout1** | **Number** | timeout for connection to remote host | [optional] 
**timeout2** | **Number** | timeout for connection to local host | [optional] 
**exclude** | **String** | exclude objects (regex) | [optional] 
**customParams** | **String** | custom parameters | [optional] 
**delete2duplicates** | **Boolean** | delete duplicates on destination (--delete2duplicates) | [optional] 
**delete1** | **Boolean** | delete from source when completed (--delete1) | [optional] 
**delete2** | **Boolean** | delete messages on destination that are not on source (--delete2) | [optional] 
**automap** | **Boolean** | try to automap folders (\&quot;Sent items\&quot;, \&quot;Sent\&quot; &#x3D;&gt; \&quot;Sent\&quot; etc.) (--automap) | [optional] 
**skipcrossduplicates** | **Boolean** | skip duplicate messages across folders (first come, first serve) (--skipcrossduplicates) | [optional] 
**subscribeall** | **Boolean** | subscribe all folders (--subscribeall) | [optional] 
**active** | **Boolean** | enables or disables the sync job | [optional] 


