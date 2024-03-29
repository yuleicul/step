# Azure <Tag variant="brand" value="9.5 h" />

::: details To learn

- [Azure functions for developer - LinkedIn](https://www.linkedin.com/learning/azure-functions-for-developers)
- [Set up a sign-up and sign-in flow](https://learn.microsoft.com/en-us/azure/active-directory-b2c/add-sign-up-and-sign-in-policy?pivots=b2c-user-flow)

- OAuth 2.0

- [RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients](https://datatracker.ietf.org/doc/html/rfc7636#section-6.2)

- [microsoft-authentication-library-for-js/lib/msal-browser at dev · AzureAD/microsoft-authentication-library-for-js](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser)

- [Tutorial: Register a Single-page application with the Microsoft identity platform - Microsoft identity platform | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-single-page-app-react-register-app)

:::

## MSAL Node <Tag value="5 h" />

<Timestamp value='March, 2024' />

[microsoft-authentication-library-for-js/lib/msal-node at dev · AzureAD/microsoft-authentication-library-for-js](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-node)

1.  [Public and confidential client apps (MSAL) - Microsoft identity platform | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity-platform/msal-client-applications)

    ::: details What's the difference between Confidential and Public clients?

    [What's the difference between Confidential and Public clients? - OAuth in Five Minutes - YouTube](https://www.youtube.com/watch?v=5cQNwifDq1U)

    _Client_ = _Application_

    _Resource Owner_ = _User_

    Confidential Clients can keep a secret, and Public Clients can't. Simply put, Confidential Clients are server-side applications (written in Node, Java, etc.), while Public Clients are client-side applications (written in JavaScript, etc).

    _PKCE_ (Proof Key for Code Exchange) is an extension to OAuth developed specifically for doing OAuth in **Public Clients**.

    :::

    ::: details What's the relationship between tenant, subscription, and resource group?

    ![Azure hierarchy](/azure-hierarchy.png)

    :::

2.  [Initializing the PublicClientApplication object](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-public-client-application.md)

    ::: details Authority in MSAL
    [Authority in MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/authority.md)

    A diagram from my own understanding:

    ![MSAL endpoint discovery](/msal-endpoint-discovery.png)

    A diagram from the [official document](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow#protocol-details):

    ![Convergence scenarios native](/convergence-scenarios-native.svg)
    :::

## Azure Active Directory B2C documentation <Tag value="0.5 h" /> <Tag variant="red" value="In progress" />

<Timestamp value='March, 2024' />

[What is Azure Active Directory B2C? | Microsoft Learn](https://learn.microsoft.com/en-us/azure/active-directory-b2c/overview)

## Microsoft identity JavaScript NodeJS tutorial <Tag value='2 h' />

<Timestamp value='March 20, 2024' />

[Azure-Samples/ms-identity-javascript-nodejs-tutorial: A chapterwise tutorial that will take you through the fundamentals of modern authentication with the Microsoft identity platform in Node.js using MSAL Node](https://github.com/Azure-Samples/ms-identity-javascript-nodejs-tutorial/tree/main)

## Getting started with Azure <Tag value="2 h" />

<Timestamp value="March, 2024" />

[Getting started with Azure - Azure](https://azure.microsoft.com/get-started/on-demand/?OCID=AZ_ODD_RM)

[Getting started with Microsoft Azure - LinkedIn](https://www.linkedin.com/learning/getting-started-with-microsoft-azure)

::: details

### Identify cloud services

- Infrastructure as a Service (IaaS): Just bare computers (without operating systems). **Azure Virtual Machines is IaaS**.
- Platform as a Service (PaaS): Hosted platform in the cloud. Not only infrastructure, but also specialized software from the cloud provider, like operating systems. **Azure App Service is PaaS**.
- Software as a Service (SaaS): software or service hosted in the cloud, e.g. Outlook, Gmail, Netflix, etc

### Azure geographies and regions

Countries + Compliance = Geographies

Geographies + Datacenters = regions

> 3D visualized datacenter: https://bit.ly/gsma-datacenter

E.g. _West US_ is a region, and _US_ is a geography

### Azure Resource Manager (ARM)

ARM uses **templates** to deploy Azure resources. No matter how you interact with Azure or manage your resources, ARM is always going to be doing the work under the hood.

> I guess ARM template is like `netlify.toml` which is used by Netlify to deploy your application.

### Azure Blob Storage

- Storing unstructured data
- Organized in _containers_
- _Blob_ is a file-like object of immutable, raw data.
- Tiers: hot, cool, and archive

:::
