# Azure <Tag variant="brand" value="24.5 h" />

::: details To learn

- [Azure functions for developer - LinkedIn](https://www.linkedin.com/learning/azure-functions-for-developers)

- [Set up a sign-up and sign-in flow](https://learn.microsoft.com/en-us/azure/active-directory-b2c/add-sign-up-and-sign-in-policy?pivots=b2c-user-flow)

- OAuth 2.0

- [RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients](https://datatracker.ietf.org/doc/html/rfc7636#section-6.2)

- [msal-browser](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser)

- [Tutorial: Register a Single-page application with the Microsoft identity platform - Microsoft identity platform | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-single-page-app-react-register-app)

- [react-router-sample](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/react-router-sample)

:::

## How to call Microsoft Graph API in B2C app <Tag value="3 h" />

<Timestamp value='April, 2024' />

- [msal-browser/docs/resources-and-scopes.md](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md)

  - (todo graph)

- [MSAL.js for React B2C Sample](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/b2c-sample)

  - This sample uses the web API registered on Azure AD B2C to get Microsoft Graph API instead of calling MG API via Application Permission (Maybe the latter way doesn't work...).

- [Add a web API application to your Azure Active Directory B2C tenant](https://learn.microsoft.com/en-us/azure/active-directory-b2c/add-web-api-application?tabs=app-reg-ga)

  - The scope is defined in your expose APIs
  - (todo graph of front end and backend app communication)

- [msal-browser/docs/working-with-b2c.md](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/working-with-b2c.md)

  - Users **cannot** obtain tokens for Microsoft APIs (e.g. MS Graph API) using delegated permissions.
  - Applications can obtain tokens for Microsoft APIs using application permissions (user management scenarios).
  - to be continued

- [Differences Between Delegated Permissions and Application Permissions Azure AD - YouTube](https://www.youtube.com/watch?v=o37dLssWB5M)
  - (todo graph)
  - (to paste configuration in my playground)

## Custom Policy <Tag value="10.5 h" /> <Tag variant="red" value="In progress" />

<Timestamp value='April, 2024' />

- [Register a single-page application in Azure Active Directory B2C](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-spa)

  OAuth 2.0 Authorization code flow (with PKCE) allows the application to exchange an authorization code for **ID tokens to represent the authenticated user and Access tokens needed to call protected APIs**. In addition, it returns **Refresh tokens** that provide long-term access to resources on behalf of users without requiring interaction with those users.

  The implicit grant flow allows the application to get ID and Access tokens. Unlike the authorization code flow, **implicit grant flow doesn't return a Refresh token**.

- [Tutorial: Create user flows and custom policies in Azure Active Directory B2C](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-custom-policy)

  1.  Create signing key and encryption key under _Identity Experience Framework_ - _Policy Keys_.
  2.  Register two applications that it uses to sign up and sign in users with local accounts: **IdentityExperienceFramework**, a web API, and **ProxyIdentityExperienceFramework**, a native app with delegated permission to the IdentityExperienceFramework app.
  3.  Download policy starter pack and update values of `yourtenant`, `IdentityExperienceFrameworkAppId`, and `ProxyIdentityExperienceFrameworkAppId`.
  4.  Upload policy files in correct order.
  5.  Test with **B2C_1A_signup_signin**. Unfortunately, I got an error:
      ![b2c login error](/b2c-error.png)
      The problem is that I should have used files inside `/Display Controls Starterpack`, instead of files under the root.

- [Write your first Azure Active Directory B2C custom policy - Hello World!](https://learn.microsoft.com/en-us/azure/active-directory-b2c/custom-policies-series-hello-world)

  ```xml
  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <TrustFrameworkPolicy
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema"
      xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06"
      PolicySchemaVersion="0.3.0.0"
      TenantId="yourtenant.onmicrosoft.com"
      PolicyId="B2C_1A_ContosoCustomPolicy"
      PublicPolicyUri="http://yourtenant.onmicrosoft.com/B2C_1A_ContosoCustomPolicy">

    <BuildingBlocks>
      <ClaimsSchema>
        <ClaimType>
          <!-- To declare a claim. A claim is like a variable. The claim's declaration also shows the claim's data type. -->
        </ClaimType>
      </ClaimsSchema>
    </BuildingBlocks>

    <ClaimsProviders>
      <!-- Claims Providers Here-->
    </ClaimsProviders>

    <UserJourneys>
      <!-- The user journey specifies the business logic the end user goes through as Azure AD B2C processes a request. -->
    </UserJourneys>

    <RelyingParty>
        <!--
            Relying Party Here that's your policy’s entry point
            Specify the User Journey to execute
            Specify the claims to include in the token that is returned when the policy runs
        -->
    </RelyingParty>
  </TrustFrameworkPolicy>
  ```

- [Set up a password reset flow in Azure Active Directory B2C](https://learn.microsoft.com/en-us/azure/active-directory-b2c/add-password-reset-policy?pivots=b2c-custom-policy)

  1.  Prerequisites: the B2C Users need to have an authentication method specified for self-service password reset. Select the B2C User, in the left menu under _Manage_, select _Authentication methods_, ensure _Authentication contact info_ is set. B2C users created via a SignUp flow will have this set by default. For users created via Azure Portal or by Graph API need to have this set for SSPR to work.

  - (todo graph)

- [Azure AD B2C Webinar Series: Custom Policies Part 1 - YouTube](https://www.youtube.com/watch?v=I-CtEGQjcic)

  - _User Flow_ is just built-in policy.
  - _Claims_ are just _variables_.
  - _Technical Profiles_ are just _functions_.
  - (todo graph)

- [Force a password reset after 90 days](https://learn.microsoft.com/en-us/azure/active-directory-b2c/force-password-reset?pivots=b2c-custom-policy#force-a-password-reset-after-90-days)

  - [Install the Microsoft Graph PowerShell SDK](https://learn.microsoft.com/en-us/powershell/microsoftgraph/installation?view=graph-powershell-1.0) in Azure Cloud Shell. (Note that Azure AD Powershell for Graph is deprecated.)
  - Use [Find-MgGraphPermission]() cmdlet (cmdlets are the native Powershell commands) to check if having the `'Domain.ReadWrite.All'` admin.
  - (todo graph)
  - (todo Option1: connect with scope - delegated permission)
  - (todo option2: connect with app secret - app permission)

But I hit a problem that i don't have the permission to connect graph by scope domain.readwrite.all, but `Find-MgGraphPermission` tells me i have the admin. That's weird.
To try: `Connect-MgGraph -ClientId <YOUR_NEW_APP_ID> -TenantId <YOUR_TENANT_ID>`. if it's not working, switch to free trial.

- (todo Connect-MgGraph with application permission) see above

- [Self-service password reset policies](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-policy#check-the-expiration-policy-for-a-password)
  - (todo cmdlets to check expiration)
  - (todo cmdlets to update expiration)

Q: pkce

## MSAL React <Tag value="2 h" /> <Tag variant="red" value="In progress" />

<Timestamp value='April, 2024' />

::: info Learning materials

[msal-react - Github](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)

[@azure/msal-react - v2.0.3 | Documentation](https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_react.html)

:::

- [Tutorial: MSAL React](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-single-page-app-react-register-app)

  - `redirectUri` should be configured in Azure Portal application authentication. Be careful choose single-page application for type.
  - All parts of the app that require authentication must be wrapped in the `MsalProvider` component.
  - `useMsal` hook can give us an `instance`, and we can do `loginPopup`, `loginRedirect`, `logoutPopup`, and `logoutRedirect` with it. We can also call `instance.acquireTokenSilent` to get the tokens (`access_token`, `id_token`, `client_info`, `refresh_token`, etc), and use `access_token` to call Microsoft API (e.g Graph API).
  - `useIsAuthenticated` hook gives us a boolean value whether or not a user is currently signed-in.

- [msal-react/docs/getting-started.md](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md):

  - Components `AuthenticatedTemplate` and `UnauthenticatedTemplate` can do the same thing as `useIsAuthenticated` hook does.
  - Components `MsalAuthenticationTemplate` and `useMsalAuthentication` hook can do the same thing as `instance` does.
  - Besides of `instance`, `useMsal` gives us `accounts` for an array of all accounts currently signed in, and an `inProgress` that tells you what msal is currently doing.
  - They recommend that the app calls the `acquireTokenSilent` API on the PublicClientApplication object each time you need an access token to access an API.

Q: what's the difference between various tokens?

- [ ] This version of the library uses the OAuth 2.0 Authorization Code Flow with PKCE. To read more about this protocol, as well as the differences between implicit flow and authorization code flow, see the section in the @azure/msal-browser readme.

## MSAL Common <Tag value="3.5 h" /> <Tag variant="red" value="In progress" />

<Timestamp value='March, 2024' />

- [msal-common/docs/authority.md](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/authority.md)

  Two diagrams from my own understanding:

  ![IdP authority](/authority.png)

  ![MSAL endpoint discovery](/msal-endpoint-discovery.png)

  A diagram from the [official document](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow#protocol-details):

  ![Convergence scenarios native](/convergence-scenarios-native.svg)

## MSAL Node <Tag value="2 h" /> <Tag variant="red" value="In progress" />

<Timestamp value='March, 2024' />

::: info Learning materials

[msal-node](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-node)

:::

- [What's the difference between Confidential and Public clients? - OAuth in Five Minutes - YouTube](https://www.youtube.com/watch?v=5cQNwifDq1U)

  _Client_ = _Application_

  _Resource Owner_ = _User_

  Confidential Clients can keep a secret, and Public Clients can't. Simply put, Confidential Clients are server-side applications (written in Node, Java, etc.), while Public Clients are client-side applications (written in JavaScript, etc).

  _PKCE_ (Proof Key for Code Exchange) is an extension to OAuth developed specifically for doing OAuth in **Public Clients**.

- What's the relationship between tenant, subscription, and resource group?

  ![Azure hierarchy](/azure-hierarchy.png)

::: info To be continued

[Initializing the PublicClientApplication object](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-public-client-application.md)

Question: how to verify token when requesting
:::

## Microsoft identity JavaScript NodeJS tutorial <Tag value='2 h' />

<Timestamp value='March 20, 2024' />

[Azure-Samples/ms-identity-javascript-nodejs-tutorial: A chapterwise tutorial that will take you through the fundamentals of modern authentication with the Microsoft identity platform in Node.js using MSAL Node](https://github.com/Azure-Samples/ms-identity-javascript-nodejs-tutorial/tree/main)

## Getting started with Azure <Tag value="2 h" />

<Timestamp value="March, 2024" />

::: info Learning materials

[Getting started with Azure - Azure](https://azure.microsoft.com/get-started/on-demand/?OCID=AZ_ODD_RM)

[Getting started with Microsoft Azure - LinkedIn](https://www.linkedin.com/learning/getting-started-with-microsoft-azure)

:::

- Identify cloud services

  - Infrastructure as a Service (IaaS): Just bare computers (without operating systems). **Azure Virtual Machines is IaaS**.
  - Platform as a Service (PaaS): Hosted platform in the cloud. Not only infrastructure, but also specialized software from the cloud provider, like operating systems. **Azure App Service is PaaS**.
  - Software as a Service (SaaS): software or service hosted in the cloud, e.g. Outlook, Gmail, Netflix, etc

- Azure geographies and regions

  Countries + Compliance = Geographies

  Geographies + Datacenters = regions

  > 3D visualized datacenter: https://bit.ly/gsma-datacenter

  E.g. _West US_ is a region, and _US_ is a geography

- Azure Resource Manager (ARM)

  ARM uses **templates** to deploy Azure resources. No matter how you interact with Azure or manage your resources, ARM is always going to be doing the work under the hood.

  > I guess ARM template is like `netlify.toml` which is used by Netlify to deploy your application.

- Azure Blob Storage

  - Storing unstructured data
  - Organized in _containers_
  - _Blob_ is a file-like object of immutable, raw data.
  - Tiers: hot, cool, and archive
