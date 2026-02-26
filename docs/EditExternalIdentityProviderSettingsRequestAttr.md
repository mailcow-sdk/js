# MailcowSdkJs.EditExternalIdentityProviderSettingsRequestAttr

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authsource** | **String** | Specifies the type of the Identity Provider | [optional] 
**serverUrl** | **String** | The base URL of your Keycloak server. Required if &#x60;authsource&#x60; is keycloak. | [optional] 
**realm** | **String** | The Keycloak realm where the mailcow client is configured. Required if &#x60;authsource&#x60; is keycloak. | [optional] 
**clientId** | **String** | The Client ID assigned to mailcow Client in OIDC Provider. Required if &#x60;authsource&#x60; is keycloak or generic-oidc. | [optional] 
**clientSecret** | **String** | The Client Secret assigned to mailcow Client in OIDC Provider. Required if &#x60;authsource&#x60; is keycloak or generic-oidc. | [optional] 
**redirectUrl** | **String** | The redirect URL that OIDC Provider will use after authentication. Required if &#x60;authsource&#x60; is keycloak or generic-oidc. | [optional] 
**redirectUrlExtra** | **[Object]** | Additional redirect URLs that OIDC Provider can use after authentication if valid. | [optional] 
**version** | **String** | Specifies the Keycloak version. Required if &#x60;authsource&#x60; is keycloak. | [optional] 
**defaultTemplate** | **String** | (Optional) If no matching Attribute Mapping exists for a User, the default template will be used for creating the mailbox, but not for updating the mailbox. | [optional] 
**mappers** | **[Object]** | (Optional) Attribute values used to match a mailbox template. Each element corresponds to the respective index in the templates array (i.e., the first element matches the first element of templates, the second matches the second, and so on). | [optional] 
**templates** | **[Object]** | (Optional) Defines the mailbox templates to be assigned. Each element corresponds to the respective index in the &#x60;mappers&#x60; array. | [optional] 
**ignoreSslError** | **Boolean** | If enabled, SSL certificate validation is bypassed | [optional] [default to false]
**mailpasswordFlow** | **Boolean** | If enabled, mailcow will attempt to validate user credentials using the Keycloak Admin REST API instead of relying solely on the Authorization Code Flow. | [optional] [default to false]
**periodicSync** | **Boolean** | If enabled, mailcow periodically performs a full sync of all users from Keycloak or LDAP. | [optional] [default to false]
**importUsers** | **Boolean** | If enabled, new users are automatically imported from Keycloak or LDAP into mailcow. | [optional] [default to false]
**syncInterval** | **Number** | Defines the time interval (in minutes) for periodic synchronization and user imports. | [optional] [default to 15]
**host** | **String** | The address of your LDAP server. You can provide a single hostname or a comma-separated list of hosts for fallback in case the primary server is unreachable. Required if &#x60;authsource&#x60; is ldap. | [optional] 
**port** | **String** | The port used to connect to the LDAP server. Required if &#x60;authsource&#x60; is ldap. | [optional] 
**useSsl** | **Boolean** | enable LDAPS connection. If Port is set to 389 it will be overriden to 636. | [optional] [default to false]
**useTls** | **Boolean** | enable TLS connection. TLS is recommended over SSL. SSL Ports cannot be used. | [optional] [default to false]
**basedn** | **String** | The Distinguished Name (DN) from which searches will be performed. Required if &#x60;authsource&#x60; is ldap. | [optional] 
**usernameField** | **String** | The LDAP attribute used to identify users during authentication. Required if &#x60;authsource&#x60; is ldap. | [optional] [default to &#39;mail&#39;]
**filter** | **String** | An optional LDAP search filter to refine which users can authenticate. | [optional] 
**attributeField** | **String** | Specifies an LDAP attribute that holds a specific value which can be mapped to a mailbox template using the Attribute Mapping section. Required if &#x60;authsource&#x60; is ldap. | [optional] 
**binddn** | **String** | The Distinguished Name (DN) of the LDAP user that will be used to authenticate and perform LDAP searches. This account should have sufficient permissions to read the required attributes. Required if &#x60;authsource&#x60; is ldap. | [optional] 
**bindpass** | **String** | The password for the Bind DN user. It is required for authentication when connecting to the LDAP server. Required if &#x60;authsource&#x60; is ldap. | [optional] 
**authorizeUrl** | **String** | The OIDC provider&#39;s authorization server URL. Required if &#x60;authsource&#x60; is generic-oidc. | [optional] 
**tokenUrl** | **String** | The OIDC provider&#39;s token server URL. Required if &#x60;authsource&#x60; is generic-oidc. | [optional] 
**userinfoUrl** | **String** | The OIDC provider&#39;s user info server URL. Required if &#x60;authsource&#x60; is generic-oidc. | [optional] 
**clientScopes** | **String** | Specifies the OIDC scopes requested during authentication. | [optional] [default to &#39;openid profile email mailcow_template&#39;]



## Enum: AuthsourceEnum


* `ldap` (value: `"ldap"`)

* `keycloak` (value: `"keycloak"`)

* `generic-oidc` (value: `"generic-oidc"`)




